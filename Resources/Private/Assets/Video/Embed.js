import { init } from '../Helper/MediaInit';
import addEvent from '../Helper/addEvent';

const SELECTOR = '.jonnitto-prettyembed--video.jonnitto-prettyembed--inline video';

addEvent(SELECTOR, function(event) {
    event.preventDefault();
    init(this);
});
