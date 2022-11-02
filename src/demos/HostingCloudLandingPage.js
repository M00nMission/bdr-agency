import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithButton2.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"
import undrawPhoneCall from "images/undraw_phone_call_yellow.svg";
import undrawBooking from "images/undraw_booking.svg";
import undrawRevenue from "images/undraw_revenue.svg";
import undrawRemoteMeeting from "images/undraw_remote_meeting.svg";
import undrawMailSent from "images/undraw_mail_sent.svg";
import undrawPitch from "images/undraw_pitching_yellow.svg";
import undrawBusinessDeal from "images/undraw_business_deal.svg";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      {/* <Features /> */}
      {/* <Pricing /> */}
      <MainFeature 
        subheading="Direct to your CRM"
        heading="Fill Pipeline With Sales Qualifed Leads"
        imageSrc={undrawPitch}
        buttonRounded={false}
      />
      <MainFeature2 
        subheading="Exceed OTE"
        heading="Exceed quota Doing What Others Aren't"
        imageSrc={undrawPhoneCall}
        buttonRounded={false}
        textOnLeft={false}
      />
      {/* <Testimonial /> */}
      <FAQ id="FAQ" />
      <Footer />
    </AnimationRevealPage>
  );
}
