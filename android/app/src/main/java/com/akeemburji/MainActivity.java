package com.akeemburji;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

import com.blitzapp.animatedsplash.animation.Splash;
import com.blitzapp.animatedsplash.animation.GroupAnimation;
import com.blitzapp.animatedsplash.animation.AddImageView;

import static com.blitzapp.animatedsplash.animation.Splash.FADE;
import static com.blitzapp.animatedsplash.animation.Splash.SLIDE;
import static com.blitzapp.animatedsplash.animation.Splash.SPLASHSLIDEDOWN;
import static com.blitzapp.animatedsplash.animation.Splash.performSingleAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideDelay;
import static com.blitzapp.animatedsplash.animation.Splash.splashShow;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundImage;
import static com.blitzapp.animatedsplash.animation.Splash.SCALE;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AkeemBurji";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    initiateSplash();
  }

  public void initiateSplash() {

    // create dialog
    Splash splash = new Splash();
    splash.createSplashView(MainActivity.this);

    // set background
    setBackgroundImage(R.drawable.splashbg);

    // set splash hide animation
    setSplashHideAnimation(SPLASHSLIDEDOWN);

    // set splash hide delay
    setSplashHideDelay(1500);
       AddImageView logoimage = new AddImageView(R.drawable.logo, screenHeight * 0.2, screenWidth * 0.2, AddImageView.getCenterX(screenWidth * 0.6), AddImageView.getCenterY(screenHeight * 0.6), AddImageView.FIT_CENTER, true);
        performSingleAnimation(logoimage, SCALE, 1500,1f, 2f, 1f, 2f);

    // create and add images to view

    splashShow();

  }
}
