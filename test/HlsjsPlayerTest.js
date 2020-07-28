Feature('Player playback');

Scenario('Check HLSJS Player with x2 overlays', (I, PlayerPage) => {
    I.amOnPage('/web-examples/hlsjs/');
    I.saveScreenshot(`${Date.now()}-HLSJS-player-links.png`);
    I.click(locate('a').withText('Demo').as('Demo link'));
    I.wait(5); // wait 5 seconds
    I.executeScript(function() {
        // now we are inside browser context
        // we can start video playback here
        video.play();
      });
    I.wait(2); // wait 2 seconds
    // verify that we can see Banner overlay
    I.seeElement(PlayerPage.bannerOverlay);
    // verify that we can see GIF overlay
    I.seeElement(PlayerPage.gifOverlay);
    // verify that we can see GIF Overlay in the player
    I.saveScreenshot(`${Date.now()}-HLSJS-player-playback.png`);
    I.executeScript(function() {
        video.pause();
      });
    // verify that we cannot see Banner and GIF overlays when player is paused
    I.dontSeeElement(PlayerPage.bannerOverlay);
    I.dontSeeElement(PlayerPage.gifOverlay);
    I.saveScreenshot(`${Date.now()}-HLSJS-player-paused.png`);
});
