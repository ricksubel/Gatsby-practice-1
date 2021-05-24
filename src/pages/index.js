import * as React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import * as indexStyles from './index.module.scss'


const IndexPage = () => {
  const welcome = indexStyles.welcome;
  const message = indexStyles.message;

  return (
    <Layout>
    <Head title='home'/>
        <h1 className={welcome}>...that was built with GatsbyJS, React, Sass, and Contentful.</h1>     
          <h2 className={message}>Trust fund aesthetic cronut banh mi asymmetrical. Tote bag try-hard blog meditation. Waistcoat you probably haven't heard of them snackwave tote bag, unicorn wolf fashion axe pop-up quinoa brunch small batch. Hoodie tumblr crucifix banjo health goth, salvia keytar kickstarter chartreuse helvetica. Ennui af vape cornhole quinoa listicle etsy woke. 8-bit photo booth man bun tbh flannel kombucha.
          <br /><br />
          Small batch typewriter live-edge offal vaporware. Roof party scenester occupy hot chicken. XOXO enamel pin la croix, master cleanse literally raclette shaman try-hard pug actually chambray truffaut typewriter paleo jianbing. Offal normcore locavore health goth gastropub. Hoodie sustainable wolf man braid.
          <br /><br />
          Vice banjo quinoa man bun selfies. Gochujang master cleanse blue bottle scenester, chillwave you probably haven't heard of them palo santo humblebrag godard williamsburg bicycle rights wolf salvia vice. Kombucha put a bird on it chambray, vaporware lyft gentrify vegan poke chicharrones venmo pinterest quinoa occupy hoodie woke. Direct trade messenger bag raclette polaroid post-ironic lumbersexual franzen. Cred kitsch cliche enamel pin vinyl, plaid lyft chicharrones 8-bit. Cray YOLO +1 scenester chia roof party brunch chicharrones lomo banh mi.
          <br /><br />
          Authentic thundercats freegan, jianbing ennui organic locavore paleo YOLO taiyaki dreamcatcher cred. Sustainable raclette small batch hexagon vice. Tattooed letterpress iceland, jianbing gochujang narwhal kickstarter. Edison bulb VHS ethical, banjo subway tile iceland four loko mlkshk art party lumbersexual. Food truck bitters lo-fi truffaut tbh pug squid, skateboard DIY edison bulb lomo woke banh mi polaroid. Tote bag celiac helvetica, cronut master cleanse messenger bag next level neutra pug chia shaman art party. Godard lo-fi fanny pack chicharrones paleo gluten-free.
          <br /><br />
          Leggings kogi cred schlitz. Fixie ethical hoodie, neutra vice DIY pitchfork offal. Normcore bitters stumptown kitsch chambray pour-over iceland artisan pork belly waistcoat keffiyeh listicle cliche. Chartreuse stumptown distillery polaroid, meggings hammock tofu thundercats 3 wolf moon. Tbh health goth trust fund ugh venmo neutra before they sold out ennui woke cray iPhone. Banh mi tilde prism cloud bread keytar actually knausgaard portland.
          </h2>
      </Layout>
  )
}

export default IndexPage