/**
 * This file is part of the package magicsunday/webtrees-pedigree-chart.
 *
 * For the full copyright and license information, please read the
 * LICENSE file distributed with this source code.
 */

/**
 * Base export class.
 *
 * @author  Rico Sonntag <mail@ricosonntag.de>
 * @license https://opensource.org/licenses/GPL-3.0 GNU General Public License v3.0
 * @link    https://github.com/magicsunday/webtrees-pedigree-chart/
 */
export default class Export
{
    /**
     * Triggers the download by creating a new anchor element and simulate a mouse click on it.
     *
     * @param {string} imgURI   The image URI data stream
     * @param {string} fileName The file name to use in the download dialog
     */
    triggerDownload(imgURI, fileName)
    {
        let event = new MouseEvent("click", {
            view: window,
            bubbles: false,
            cancelable: true
        });

        let a = document.createElement("a");
        a.setAttribute("download", fileName);
        a.setAttribute("href", imgURI);
        a.setAttribute("target", "_blank");
        a.dispatchEvent(event);
    }
}
