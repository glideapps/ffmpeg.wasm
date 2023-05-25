import * as resolveURL from 'resolve-url';

/*
 * Default options for browser environment
 */
const corePath = typeof process !== 'undefined' && process.env.NODE_ENV === 'development'
  ? resolveURL('/node_modules/@ffmpeg/core/dist/ffmpeg-core.js')
  : `https://unpkg.com/@ffmpeg/core@${pkg.devDependencies['@ffmpeg/core'].substring(1)}/dist/ffmpeg-core.js`;

export default { corePath };
