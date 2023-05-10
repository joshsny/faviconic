import { getIcon } from '../src/index';

describe('url tests', () => {
  it('from manifest', async () => {
    const { url } = await getIcon('yahoo.com');

    expect(url).toEqual(
      'https://s.yimg.com/cv/apiv2/09062018/manifest/yahoo_install_512.png'
    );
  });
});
