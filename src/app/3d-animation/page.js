"use client"

import React from 'react'
import InnerBanner from '@/components/InnerBanner/InnerBanner'
import Animations from '@/components/Animations/Animations'
import Form from '@/components/form/Form'
import Animation from '@/components/video-animation/Animation'
import Portfolio from '@/components/portfolio/Portfolio'
import Brand from '@/components/BrandShine/Brand'
import Remarkable from '@/components/Remarkable/Remarkable'
import OurClient from '@/components/ourClient/OurClient'
import Extraordinary from '@/components/Extraordinary/Extraordinary'


// ===== Images 
import BranShine from "media/3d-animation/brandshine.png"
import SaleShine from "media/home/salesimage.png"
import BannerImage from "media/3d-animation/3d-banner.png"
import Client1 from "media/home/client1.png"
import Client2 from "media/home/client2.png"

// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/1.jpg"
import Thumnail2 from "media/thumbnails/2d-animation/2.jpg"
import Thumnail3 from "media/thumbnails/2d-animation/3.jpg"
import Thumnail4 from "media/thumbnails/2d-animation/4.jpg"
import Thumnail5 from "media/thumbnails/2d-animation/5.jpg"
import Thumnail6 from "media/thumbnails/2d-animation/6.jpg"
import Thumnail7 from "media/thumbnails/3d-animation/1.jpg"
import Thumnail8 from "media/thumbnails/3d-animation/2.jpg"
import Thumnail9 from "media/thumbnails/3d-animation/3.jpg"
import Thumnail10 from "media/thumbnails/3d-animation/4.jpg"
import Thumnail11 from "media/thumbnails/3d-animation/5.jpg"
import Thumnail12 from "media/thumbnails/3d-animation/6.jpg"
import Thumnail13 from "media/thumbnails/whiteboard/1.jpg"
import Thumnail14 from "media/thumbnails/whiteboard/2.jpg"
import Thumnail15 from "media/thumbnails/whiteboard/3.jpg"
import Thumnail16 from "media/thumbnails/whiteboard/4.jpg"
import Thumnail17 from "media/thumbnails/whiteboard/5.jpg"
import Thumnail18 from "media/thumbnails/whiteboard/6.jpg"
import Thumnail19 from "media/thumbnails/motion-graphics/1.jpg"
import Thumnail20 from "media/thumbnails/motion-graphics/2.jpg"
import Thumnail21 from "media/thumbnails/motion-graphics/3.jpg"
import Thumnail22 from "media/thumbnails/motion-graphics/4.jpg"
import Thumnail23 from "media/thumbnails/motion-graphics/5.jpg"
import Thumnail24 from "media/thumbnails/motion-graphics/6.jpg"
import Thumnail25 from "media/thumbnails/hybrid/1.jpg"
import Thumnail26 from "media/thumbnails/hybrid/2.jpg"
import Thumnail27 from "media/thumbnails/hybrid/3.jpg"
import Thumnail28 from "media/thumbnails/hybrid/4.jpg"
import Thumnail29 from "media/thumbnails/hybrid/5.jpg"
import Thumnail30 from "media/thumbnails/hybrid/6.jpg"

// ===== Card Images
import Remark10 from "media/home/remark15.png"
import Remark11 from "media/home/remark16.png"
import Remark12 from "media/home/remark17.png"
import Remark13 from "media/home/remark3.png"
import Remark14 from "media/home/remark18.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- Dynamic 3D simulations",
    "- Precise 3D modeling and rendering",
    "- Immersive 3D animations to drive the informed purchase",
    "- Stunning realism and fluid animation",
  ]

  const banner = {
    title: <>Enhance Your Conversion Rates with Hyper-Realistic 3D Animations </>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/924775413/rendition/240p/file.mp4?loc=external&log_user=0&signature=8ec85e9167e33fa1f6f0341d28222d54340a4a5eff496c22a01c4feb71262cb9",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>3D Animations – ‘The Game-Changer’ In Visual Storytelling</>,
    para: <>Not all 3D product videos are created equal. As a leading product animation company, Cloud Studios Inc. understands the critical importance of aligning animation styles with your brand identity and product objectives. By leveraging advanced 3D modeling techniques, we eliminate the need for costly and time-consuming product shoots, allowing you to present your products in a hyper-realistic and dynamic format. Our team of skilled artists meticulously crafts detailed 3D models, integrating sophisticated textures, special effects, and strategic embellishments. This technical expertise ensures that your product is the ‘star of the show,’ showcasing its features and benefits with exceptional clarity and visual appeal that engage and convert your audience.</>,
    subtitleOne: <>Empowering Brands to Grow!</>,
    subtitleTwo: <>Jaw-dropping 3D Animation Services that Create the Real Buzz!</>,
    subpara: <>Cloud Studios Inc. caters to businesses of all sizes, from industry giants to emerging startups. Our hyper-realistic 3D animations and explainer videos simplify complex features with clear, engaging visuals, showcasing products in real-life settings and practical applications. We provide faster, budget-friendly solutions that create stunning visuals, keeping viewers engaged and boosting sales. Additionally, our character-driven animations introduce spokespersons or brand mascots that connect with audiences on an emotional level, enhancing brand loyalty and recognition.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916117105/rendition/720p/file.mp4?loc=external&log_user=0&signature=923260b1c7032379e26fa6aeba225548aa77d407720fdc9b5904828132bc9a88",
  }

  // ==== Form
  const formData = {
    title: (<>🔥 Get More Done All in One Place! </>),
    para: (<>🌟 Combine any services you need, from 3D animations to motion graphics to all things included in your brand’s <br/>animation production project—you name it, we'll make a plug-and-play package deal for it.</>),
  }

  //=====Portfilio Fold=====// 
  const tabInfo = [
    { label: "2D Animations", index: 0 },
    { label: "3D Animation", index: 1 },
    { label: "Whiteboard", index: 2 },
    { label: "Motion Graphics", index: 3 },
    { label: "Hybrid Animation", index: 4 },
  ];
  const tabContents = [
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
        thumbnail: Thumnail1,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
        thumbnail: Thumnail2,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
        thumbnail: Thumnail3,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
        thumbnail: Thumnail4,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
        thumbnail: Thumnail5,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
        thumbnail: Thumnail6,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
        thumbnail: Thumnail7,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
        thumbnail: Thumnail8,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
        thumbnail: Thumnail9,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
        thumbnail: Thumnail10,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
        thumbnail: Thumnail11,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
        thumbnail: Thumnail12,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
        thumbnail: Thumnail13,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
        thumbnail: Thumnail14,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
        thumbnail: Thumnail15,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
        thumbnail: Thumnail16,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
        thumbnail: Thumnail17,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
        thumbnail: Thumnail18,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
        thumbnail: Thumnail19,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
        thumbnail: Thumnail20,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
        thumbnail: Thumnail21,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667958/rendition/1080p/file.mp4?loc=external&signature=a3502c5e8ab318001eebdb072c17871dd6d561ebb9f922a08ef03dc6ffd35fe4",
        thumbnail: Thumnail22,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
        thumbnail: Thumnail23,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
        thumbnail: Thumnail24,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
        thumbnail: Thumnail25,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
        thumbnail: Thumnail26,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
        thumbnail: Thumnail27,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
        thumbnail: Thumnail28,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
        thumbnail: Thumnail29,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
        thumbnail: Thumnail30,
      }
    ],
  ];
  const portfolio = {
    title: (<> Our Award-winning Video Animation Fort-Knox. </>),
    para: (<>We’ve got groundbreaking, scalable 3D video solutions and a rendering portfolio you <br />won’t miss checking out.</>),
    tabContents: tabContents,
    tabsInfo: true,
    tabInfo: tabInfo,
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Define your Business Digitally with 3D Animations Services That Magnetize Target Audiences!",
    subtitle: "",
    desc: "Empower your digital presence with Cloud Studios Inc.'s precision-crafted 3D animation videos strategically designed to captivate your target audience. Utilizing cutting-edge software and expert knowledge, we specialize in delivering comprehensive 3D architectural animation services tailored for diverse applications in movies, games, and digital platforms. Our advanced services are sought after by leading companies seeking to breathe life into. From creating lifelike characters to bringing fantasy figures to vivid reality, our meticulous process ensures the production of high-end photoreal 3D character animation projects resonates deeply with viewers, setting your brand apart in the saturated market.",
    branImage: BranShine,
    isBranImage: true,
    css: "lg:min-h-[350px] lg:w-10/12 animationUpDown",
    positionCss: "absolute top-[-43px] right-[-15px] lg:top-[-104px] lg:right-[-20px]",
    btnTxt: "Make An Animation     +"
  }
  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Briefing and Storyboarding</>,
    cardpara: <>The process starts with a comprehensive briefing session where our team dives deep into understanding your brand essence and creative vision. Collaboratively, we outline the storyboard—a visual blueprint that maps out each scene, camera angles, character interactions, and key narrative beats. This meticulous planning stage ensures alignment with your objectives and sets the foundation for a compelling 3D animation.</>,
    css: "",
    imageCss: 'w-auto',
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>3D Modeling</>,
    cardpara: <>With the storyboard approved, our skilled artists commence the 3D modeling phase. Using cutting-edge software, they sculpt digital models of characters, assets, and environments based on the storyboard specifications. This step focuses on achieving accuracy, detail, and visual appeal while maintaining fidelity to your brand's identity and creative direction. </>,
    css: "",
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Texturing and Rigging</>,
    cardpara: <>Once the 3D models are created, they undergo texturing—a process where realistic surfaces, colors, and textures are applied to enhance visual depth and realism. Concurrently, our team rigs the models, assigning digital skeletons and controls that facilitate lifelike movements. This meticulous preparation ensures that characters and objects behave naturally during animation, adhering to the narrative's emotional and physical requirements. </>,
    css: "w-full absolute bottom-[-3px] lg:w-11/12",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Layout and Animation</>,
    cardpara: <>In the layout phase, our animators position the 3D models within digital environments, establishing spatial relationships and camera placements as per the storyboard. Here, animation breathes life into the narrative—each movement and expression is meticulously crafted to convey emotions, actions, and storytelling nuances. Whether character performances or dynamic object interactions, this stage brings your narrative to vivid, engaging life. </>,
    css: "",
    cardImage: Remark13,
  }
  const cardSeven = {
    cardtitle: <></>,
    cardpara: <></>,
    cardImage: "",
  }
  const cardEight = {
    cardtitle: <></>,
    cardpara: <></>,
    cardImage: "",
  }
  const cardTen = {
    cardtitle: <>Rendering</>,
    cardpara: <>Rendering marks the final stage, where the animated scenes are processed into high-resolution images or frames. We use powerful rendering software and hardware to ensure that every detail—from lighting and shadows to textures and visual effects—is meticulously polished. This meticulous attention to detail culminates in a visually stunning 3D animation that aligns seamlessly with your brand’s identity and resonates with your target audience.
      <br /><br />
      THAT’S IT! Our streamlined 3D animation process—from briefing and storyboarding through modeling, texturing, rigging, animation, and rendering—ensures a cohesive and impactful visual narrative. We deliver high-definition, ready-to-deploy, 1080p video files in your MOV or MP4 animation files that captivate audiences and elevate brand storytelling. 
      <br /><br />
      Connect with our experienced 3D modeling industry experts, ready to help you produce awe-inspiring 3D assets for your project.
    </>,
    css: "",
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>How Do We Turn Basic Sketches into Interactive 3D Product Animations?</>,
    para: <>At Cloud Studios Inc, our meticulous work process is intricately crafted to yield flawless outcomes, whether for large-scale endeavors <br />
      or smaller projects. Every detail is considered in our comprehensive approach to ensure excellence in every animation project.</>,
    cardOne: cardOne,
    cardTwo: cardTwo,
    cardThree: cardThree,
    cardFour: cardFour,
    cardSeven: cardSeven,
    cardEight: cardEight,
    cardTen: cardTen,
    isHomePage: false,
  }

  // ===== sales
  const sales = {
    title: "Cutting-edge 3D Animation Services are just a tap away!",
    subtitle: "",
    desc: "",
    branImage: SaleShine,
    btnTitle: "Grab your bag of chips, and let's get the ball rolling!"
  }

  // ===== OurClient

  const ourClient = {
    title: "See what our clients have to say!",
    para: "Trust Earned is Trust Is Endured!",
    reviewContent: [
      {
        image: Client1,
        title: 'Ava Reynolds',
        para: `Cloud Studios transformed our project with their exceptional 3D animations. I just loved how they exceeded our expectations by animating as highly realistic animations as possible. I'm grateful for their expertise in bringing our vision to life!`
      },
      {
        image: Client2,
        title: 'Lucas Bennett',
        para: `Working with Cloud Studios was a breeze; hat’s off to the team! Their 3D animation team demonstrated outstanding skill and professionalism throughout the project. They delivered stunning visuals that perfectly captured our brand's story and message. `
      },
      {
        image: Client1,
        title: 'Harper Mitchell',
        para: `Cloud Studios' 3D animations are nothing short of impressive. Their ability to blend creativity with technical precision is remarkable. It was a pleasure collaborating with such a dedicated and talented team. 5 stars for their services! `
      },
      {
        image: Client2,
        title: 'Logan Sullivan',
        para: `I'm thrilled with the results from Cloud Studios Inc. Their 3D animations added a new dimension to our marketing campaign, engaging our audience like never before. Their commitment to quality and innovation sets them apart.`
      }
    ]
  }


  // ===== extraOrdinary
  const extraOrdinary = {
    title: (<>From Sketch to Spectacular – Bring Out the True Essence of Your Brand </>),
    para: (<>Get ready to boost traffic and audience engagement with Cloud Studios 3D animation services that will take your business to new heights. </>),
  }


  return (
    <>
      <InnerBanner content={banner} />
      <Form content={formData}/>
      <Animations content={animations} />
      {/* <Portfolio content={portfolio} /> */}
      <Brand content={brands} />
      <Remarkable content={remarkable} />
      {/* <Animation /> */} 
      <Brand content={sales} />
      <OurClient content={ourClient} />
      <Extraordinary content={extraOrdinary} />
    </>
  )
}

export default page
