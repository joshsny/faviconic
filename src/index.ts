type Options = {
  targetSize?: number;
};

const getIcon = async (
  domain: string,
  options: Options = {}
): Promise<{ url?: string; size: { width: number; height: number } }> => {
  const { targetSize = 512 } = options;
  try {
    const url = domain.startsWith('http') ? domain : `https://${domain}`;
    // Fetch the target domain's HTML content
    const response = await fetch(url);
    const html = await response.text();

    const manifestLinkRegex =
      /<link\s+(?:[^>]*?\s+)?rel\s*=\s*(?:"|')?\s*manifest\s*(?:"|')?(?:[^>]*?\s+)?(?:[^>]*?)>/gi;

    // Regular expression to match favicon link elements
    const faviconLinkRegex =
      /<link\s+(?:[^>]*?\s+)?rel\s*=\s*(?:"|')?\s*(?:icon|shortcut\s+icon|apple-touch-icon|mask-icon)\s*(?:"|')?(?:[^>]*?\s+)?(?:[^>]*?)>/gi;

    // Regular expression to extract href and sizes attributes
    const hrefRegex = /\s+href\s*=\s*(?:"|')?\s*([^"\s]+)\s*(?:"|')?/i;
    const sizesRegex = /\s+sizes\s*=\s*(?:"|')?\s*([^"\s]+)\s*(?:"|')?/i;

    // Check if a manifest link element exists
    const manifestLinkMatch = html.match(manifestLinkRegex);

    if (manifestLinkMatch) {
      const hrefMatch = manifestLinkMatch[0].match(hrefRegex);
      const manifestURL = hrefMatch ? hrefMatch[1] : null;

      if (manifestURL) {
        const baseURL = new URL(manifestURL, url);
        const manifestResponse = await fetch(baseURL.href);
        const manifestData = await manifestResponse.json();

        if (manifestData.icons && manifestData.icons.length > 0) {
          const largestIcon = manifestData.icons.reduce(
            (
              closest: {
                url?: string;
                size: { width: number; height: number };
              },
              icon: { sizes: string; src: string }
            ) => {
              const [width, height] = (icon.sizes || '32x32')
                .split('x')
                .map(Number);
              const iconSize = Math.sqrt(
                Math.pow(width - targetSize, 2) +
                  Math.pow(height - targetSize, 2)
              );
              const closestSize = Math.sqrt(
                Math.pow(closest.size.width - targetSize, 2) +
                  Math.pow(closest.size.height - targetSize, 2)
              );

              return iconSize < closestSize
                ? {
                    url: new URL(icon.src, baseURL).href,
                    size: { width, height },
                  }
                : closest;
            },
            { url: undefined, size: { width: 0, height: 0 } }
          );

          if (largestIcon.url) {
            return largestIcon;
          }
        }
      }
    }

    // Extract favicons and sort by size (descending)
    const favicons = Array.from(html.matchAll(faviconLinkRegex))
      .map((match) => {
        const hrefMatch = match[0].match(hrefRegex);
        const sizesMatch = match[0].match(sizesRegex);

        if (!hrefMatch) {
          return { url: undefined, size: { width: 0, height: 0 } };
        }

        const href = hrefMatch ? hrefMatch[1] : '';
        const sizes = sizesMatch ? sizesMatch[1] : '32x32';
        const [width, height] = sizes.split('x').map(Number);
        const size = { width, height };
        return { url: href, size };
      })
      .sort(
        (a, b) => b.size.width * b.size.height - a.size.width * a.size.height
      )
      .filter(({ url }) => url);

    // Select the highest resolution favicon
    const favicon =
      favicons.length > 0
        ? favicons[0]
        : { url: undefined, size: { width: 0, height: 0 } };

    return favicon;
  } catch (error) {
    console.error(error);
    return { url: undefined, size: { width: 0, height: 0 } };
  }
};

export { getIcon };
