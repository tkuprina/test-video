Feature('Player playback');

Scenario('Check JW Player with x2 overlays', (I, PlayerPage) => {
    I.amOnPage('/web-examples/jwplayer/');
    I.saveScreenshot(`${Date.now()}-JW-player-links.png`);
    I.click(locate('a').withText('Demo').as('Demo link'));
    I.wait(5); // wait 5 seconds
    // Click on Play button
    I.click(locate('div[aria-label="Play"]').as('Play button'));
    I.wait(5); // wait 5 seconds
    // verify that we can see Banner overlay
    I.seeElement(PlayerPage.bannerOverlay);
    // verify that we can see GIF overlay
    I.seeElement(PlayerPage.gifOverlay);
    // verify that we can see GIF Overlay in the player
    I.saveScreenshot(`${Date.now()}-JW-player-playback.png`);
    // Click on Pause button
    I.click(locate('div.jw-icon-playback[aria-label="Pause"]').as('Pause button'));
    // verify that we cannot see Banner and GIF overlays when player is paused
    I.dontSeeElement(PlayerPage.bannerOverlay);
    I.dontSeeElement(PlayerPage.gifOverlay);
    I.saveScreenshot(`${Date.now()}-JW-player-paused.png`);
});
