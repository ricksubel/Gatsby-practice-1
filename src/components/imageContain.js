import * as React from 'react'

import * as imageContainStyles from './imageContain.module.scss'
import image1 from '../images/me1.png'
import image2 from '../images/pup.png'
import image3 from '../images/computer.png'
import image4 from '../images/more.png'
import image1A from '../images/me.png'
import image2A from '../images/simon.png'
import image3A from '../images/workstation.png'
import image4A from '../images/me&Andria.png'


const ImageContain = () => {
    // <--- Create shorthand -->
    const container = imageContainStyles.container;
    const aboutMe = imageContainStyles.aboutMe;
    const aboutPup = imageContainStyles.aboutMe;
    const aboutWork = imageContainStyles.aboutMe;
    const aboutOther = imageContainStyles.aboutMe;
    const img1 = imageContainStyles.img1;
    const img1A = imageContainStyles.img1A;
    const img2 = imageContainStyles.img2;
    const img2A = imageContainStyles.img2A;
    const img3 = imageContainStyles.img3;
    const img3A = imageContainStyles.img3A;
    const img4 = imageContainStyles.img4;
    const img4A = imageContainStyles.img4A;
    const hidden1 = imageContainStyles.hidden1;
    const hidden2 = imageContainStyles.hidden2;
    const hidden3 = imageContainStyles.hidden3;
    const hidden4 = imageContainStyles.hidden4;
    const hid1Text = imageContainStyles.hid1Text;
    const hid2Text = imageContainStyles.hid2Text;
    const hid3Text = imageContainStyles.hid3Text;
    const hid4Text = imageContainStyles.hid4Text;


    return (
        <div className={container}>
            
            <div className={aboutMe}>
                <img className={img1} src={image1} alt="image1" />
                <div className={hidden1}>
                    <img className={img1A} src={image1A} alt="image1A" />
                    <p className={hid1Text}> 
                        Taiyaki skateboard cronut adaptogen hella. Put a bird on it lo-fi tousled, shabby chic vape prism tbh chicharrones. XOXO skateboard before they sold out direct trade try-hard single-origin coffee. Microdosing tousled franzen organic artisan shaman marfa kale chips af iceland. Letterpress typewriter flannel, literally authentic austin lumbersexual pop-up shoreditch shabby chic cray blog tote bag.
                        <br /><br />
                        Gochujang chambray wayfarers meggings, chia shoreditch pop-up waistcoat godard gastropub next level fanny pack gentrify intelligentsia blog. Godard selvage knausgaard flannel offal. Pinterest tofu jianbing master cleanse asymmetrical, thundercats shabby chic meggings gentrify crucifix hell of narwhal poutine knausgaard single-origin coffee. Asymmetrical pok pok williamsburg artisan pop-up dreamcatcher, jean shorts +1 narwhal gochujang authentic pickled vegan. Gluten-free pok pok vexillologist craft beer cliche etsy flannel health goth twee vaporware. Poutine woke humblebrag, retro artisan meditation prism cloud bread farm-to-table kale chips heirloom taiyaki quinoa butcher. La croix ramps iceland austin, kitsch edison bulb try-hard.
                    </p>
                </div>
            </div>

            <div className={aboutPup}>
                <img className={img2} src={image2} alt="image2" />
                <div className={hidden2}>
                    <img className={img2A} src={image2A} alt="image2A" />
                    <p className={hid2Text}>
                        Kitsch cold-pressed lyft pinterest whatever. XOXO before they sold out blue bottle shoreditch, normcore migas mumblecore cred iPhone 8-bit brooklyn sriracha sustainable banjo kogi. Cloud bread ramps poke butcher pour-over. Literally intelligentsia selfies pabst slow-carb normcore chartreuse messenger bag cloud bread VHS hot chicken trust fund tacos.
                        <br /><br />
                        Listicle flexitarian salvia kickstarter. Fashion axe williamsburg helvetica, sriracha microdosing master cleanse celiac keffiyeh tbh offal you probably haven't heard of them 90's craft beer taxidermy mixtape. Fashion axe glossier godard retro, sustainable live-edge four dollar toast banjo lyft williamsburg pug tilde dreamcatcher pour-over. Poutine hashtag unicorn authentic fingerstache hammock. Street art try-hard helvetica vice narwhal pinterest, sartorial umami franzen hammock direct trade green juice gentrify schlitz.
                    </p>
                </div>
            </div>

            <div className={aboutWork}>
                <img className={img3} src={image3} alt="image3" />
                <div className={hidden3}>
                    <img className={img3A} src={image3A} alt="image3A" />
                    <p className={hid3Text}>
                        Irony deep v austin yr try-hard truffaut plaid blog crucifix four loko kickstarter biodiesel mumblecore. Tousled food truck humblebrag fam thundercats shaman put a bird on it narwhal, truffaut hexagon gluten-free tote bag. Unicorn artisan keytar vegan, vape humblebrag tousled affogato slow-carb keffiyeh pour-over seitan. Pitchfork activated charcoal brunch la croix, authentic meggings pork belly hella pug waistcoat craft beer typewriter. Echo park readymade flexitarian, food truck slow-carb bespoke DIY aesthetic.
                        <br /><br />
                        Subway tile hoodie biodiesel, VHS slow-carb kogi blue bottle art party microdosing post-ironic pitchfork forage schlitz. Farm-to-table taxidermy selvage, street art unicorn truffaut meh craft beer kickstarter semiotics celiac. Semiotics migas gluten-free before they sold out polaroid quinoa. Raclette leggings letterpress, salvia vinyl pinterest air plant PBR&B kitsch tote bag artisan edison bulb hoodie portland authentic.
                    </p>
                </div>
            </div>

            <div className={aboutOther}>
                <img className={img4} src={image4} alt="image4" />
                <div className={hidden4}>
                    <img className={img4A} src={image4A} alt="image4A" />
                    <p className={hid4Text}>
                        Ugh quinoa ethical banh mi pork belly air plant forage craft beer unicorn fixie bespoke beard live-edge gastropub. Freegan banjo fam pour-over humblebrag. Fashion axe mumblecore artisan, hella hashtag disrupt lyft hammock deep v street art helvetica jean shorts. Fam pitchfork typewriter humblebrag gentrify. Vinyl iPhone shaman adaptogen tumblr truffaut franzen selfies XOXO.
                        <br /><br />
                        Glossier pop-up man bun meggings cold-pressed tousled la croix franzen health goth church-key fingerstache mixtape ramps wayfarers letterpress. Typewriter fashion axe pok pok asymmetrical brooklyn edison bulb meditation vinyl ramps ugh selfies fanny pack. Selvage chicharrones freegan, artisan chambray cronut helvetica fixie vaporware try-hard pitchfork lo-fi yuccie polaroid. Dreamcatcher stumptown meggings, wayfarers thundercats locavore hella kogi vape austin messenger bag bespoke. Microdosing readymade keffiyeh, roof party YOLO church-key salvia asymmetrical gochujang pour-over williamsburg normcore letterpress. Cray iPhone subway tile sriracha chillwave edison bulb authentic flexitarian. Hella yuccie air plant tousled, keytar knausgaard gluten-free pok pok leggings semiotics everyday carry hexagon.
                    </p>
                </div>
            </div>
        </div>   
    )
}

export default ImageContain