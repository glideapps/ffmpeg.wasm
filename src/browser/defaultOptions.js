import * as resolveURL from 'resolve-url';

/*
 * Default options for browser environment
 */
const corePath = resolveURL('/node_modules/@ffmpeg/core/dist/ffmpeg-core.js');

export default { corePath };
