import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import HeroSection from "@/containers/HeroSection";
import Simptoms from "@/containers/Simptoms";
import CardSection from "@/containers/CardSection";
import Benefits from "@/containers/Benefits";
import ParasitesSection from "@/containers/ParasitesSection";
import RecommendationSection from "@/containers/RecommendationSection";
import FormSection from "@/containers/FormSection";

function App() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const yandexId = import.meta.env.VITE_YANDEX_METRIKA_ID;
  const gtagId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
  const fbPixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

  useEffect(() => {
    const langCode = lang ?? i18n.language;
    if (langCode && ["uz", "ru"].includes(langCode)) {
      i18n.changeLanguage(langCode);
    } else {
      i18n.changeLanguage("uz");
    }
  }, [lang, i18n]);

  return (
    <>
      <Helmet>
        <title>Nutva - Tabiiy Parazitga Qarshi Vosita</title>
        <meta
          name="description"
          content="Nutva — tabiiy va xavfsiz parazitlarga qarshi vosita. Tanangizni tozalang, sog‘lom hayotni boshlang."
        />

        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}');
        `}</script>

        {/* Yandex Metrika */}
        <script type="text/javascript">{`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(${yandexId}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `}</script>

        {/* Facebook Pixel */}
        <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${fbPixelId}');
          fbq('track', 'PageView');
        `}</script>

        {/* Noscript fallback */}
        <noscript>{`
          <div><img src="https://mc.yandex.ru/watch/${yandexId}" style="position:absolute; left:-9999px;" alt="" /></div>
        `}</noscript>
        <noscript>{`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1" />
        `}</noscript>
      </Helmet>

      <div className="App bg-[#FFF3D9]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-2xl"
        >
          <HeroSection />
          <Simptoms />
          <CardSection />
          <Benefits />
          <ParasitesSection />
          <RecommendationSection />
          <FormSection />
        </motion.div>
      </div>
    </>
  );
}

export default App;
