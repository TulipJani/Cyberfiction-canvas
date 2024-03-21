function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: {
      smooth: true,
    },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./IMAGES/male0001.webp
     ./IMAGES/male0002.webp
     ./IMAGES/male0003.webp
     ./IMAGES/male0004.webp
     ./IMAGES/male0005.webp
     ./IMAGES/male0006.webp
     ./IMAGES/male0007.webp
     ./IMAGES/male0008.webp
     ./IMAGES/male0009.webp
     ./IMAGES/male0010.webp
     ./IMAGES/male0011.webp
     ./IMAGES/male0012.webp
     ./IMAGES/male0013.webp
     ./IMAGES/male0014.webp
     ./IMAGES/male0015.webp
     ./IMAGES/male0016.webp
     ./IMAGES/male0017.webp
     ./IMAGES/male0018.webp
     ./IMAGES/male0019.webp
     ./IMAGES/male0020.webp
     ./IMAGES/male0021.webp
     ./IMAGES/male0022.webp
     ./IMAGES/male0023.webp
     ./IMAGES/male0024.webp
     ./IMAGES/male0025.webp
     ./IMAGES/male0026.webp
     ./IMAGES/male0027.webp
     ./IMAGES/male0028.webp
     ./IMAGES/male0029.webp
     ./IMAGES/male0030.webp
     ./IMAGES/male0031.webp
     ./IMAGES/male0032.webp
     ./IMAGES/male0033.webp
     ./IMAGES/male0034.webp
     ./IMAGES/male0035.webp
     ./IMAGES/male0036.webp
     ./IMAGES/male0037.webp
     ./IMAGES/male0038.webp
     ./IMAGES/male0039.webp
     ./IMAGES/male0040.webp
     ./IMAGES/male0041.webp
     ./IMAGES/male0042.webp
     ./IMAGES/male0043.webp
     ./IMAGES/male0044.webp
     ./IMAGES/male0045.webp
     ./IMAGES/male0046.webp
     ./IMAGES/male0047.webp
     ./IMAGES/male0048.webp
     ./IMAGES/male0049.webp
     ./IMAGES/male0050.webp
     ./IMAGES/male0051.webp
     ./IMAGES/male0052.webp
     ./IMAGES/male0053.webp
     ./IMAGES/male0054.webp
     ./IMAGES/male0055.webp
     ./IMAGES/male0056.webp
     ./IMAGES/male0057.webp
     ./IMAGES/male0058.webp
     ./IMAGES/male0059.webp
     ./IMAGES/male0060.webp
     ./IMAGES/male0061.webp
     ./IMAGES/male0062.webp
     ./IMAGES/male0063.webp
     ./IMAGES/male0064.webp
     ./IMAGES/male0065.webp
     ./IMAGES/male0066.webp
     ./IMAGES/male0067.webp
     ./IMAGES/male0068.webp
     ./IMAGES/male0069.webp
     ./IMAGES/male0070.webp
     ./IMAGES/male0071.webp
     ./IMAGES/male0072.webp
     ./IMAGES/male0073.webp
     ./IMAGES/male0074.webp
     ./IMAGES/male0075.webp
     ./IMAGES/male0076.webp
     ./IMAGES/male0077.webp
     ./IMAGES/male0078.webp
     ./IMAGES/male0079.webp
     ./IMAGES/male0080.webp
     ./IMAGES/male0081.webp
     ./IMAGES/male0082.webp
     ./IMAGES/male0083.webp
     ./IMAGES/male0084.webp
     ./IMAGES/male0085.webp
     ./IMAGES/male0086.webp
     ./IMAGES/male0087.webp
     ./IMAGES/male0088.webp
     ./IMAGES/male0089.webp
     ./IMAGES/male0090.webp
     ./IMAGES/male0091.webp
     ./IMAGES/male0092.webp
     ./IMAGES/male0093.webp
     ./IMAGES/male0094.webp
     ./IMAGES/male0095.webp
     ./IMAGES/male0096.webp
     ./IMAGES/male0097.webp
     ./IMAGES/male0098.webp
     ./IMAGES/male0099.webp
     ./IMAGES/male0100.webp
     ./IMAGES/male0101.webp
     ./IMAGES/male0102.webp
     ./IMAGES/male0103.webp
     ./IMAGES/male0104.webp
     ./IMAGES/male0105.webp
     ./IMAGES/male0106.webp
     ./IMAGES/male0107.webp
     ./IMAGES/male0108.webp
     ./IMAGES/male0109.webp
     ./IMAGES/male0110.webp
     ./IMAGES/male0111.webp
     ./IMAGES/male0112.webp
     ./IMAGES/male0113.webp
     ./IMAGES/male0114.webp
     ./IMAGES/male0115.webp
     ./IMAGES/male0116.webp
     ./IMAGES/male0117.webp
     ./IMAGES/male0118.webp
     ./IMAGES/male0119.webp
     ./IMAGES/male0120.webp
     ./IMAGES/male0121.webp
     ./IMAGES/male0122.webp
     ./IMAGES/male0123.webp
     ./IMAGES/male0124.webp
     ./IMAGES/male0125.webp
     ./IMAGES/male0126.webp
     ./IMAGES/male0127.webp
     ./IMAGES/male0128.webp
     ./IMAGES/male0129.webp
     ./IMAGES/male0130.webp
     ./IMAGES/male0131.webp
     ./IMAGES/male0132.webp
     ./IMAGES/male0133.webp
     ./IMAGES/male0134.webp
     ./IMAGES/male0135.webp
     ./IMAGES/male0136.webp
     ./IMAGES/male0137.webp
     ./IMAGES/male0138.webp
     ./IMAGES/male0139.webp
     ./IMAGES/male0140.webp
     ./IMAGES/male0141.webp
     ./IMAGES/male0142.webp
     ./IMAGES/male0143.webp
     ./IMAGES/male0144.webp
     ./IMAGES/male0145.webp
     ./IMAGES/male0146.webp
     ./IMAGES/male0147.webp
     ./IMAGES/male0148.webp
     ./IMAGES/male0149.webp
     ./IMAGES/male0150.webp
     ./IMAGES/male0151.webp
     ./IMAGES/male0152.webp
     ./IMAGES/male0153.webp
     ./IMAGES/male0154.webp
     ./IMAGES/male0155.webp
     ./IMAGES/male0156.webp
     ./IMAGES/male0157.webp
     ./IMAGES/male0158.webp
     ./IMAGES/male0159.webp
     ./IMAGES/male0160.webp
     ./IMAGES/male0161.webp
     ./IMAGES/male0162.webp
     ./IMAGES/male0163.webp
     ./IMAGES/male0164.webp
     ./IMAGES/male0165.webp
     ./IMAGES/male0166.webp
     ./IMAGES/male0167.webp
     ./IMAGES/male0168.webp
     ./IMAGES/male0169.webp
     ./IMAGES/male0170.webp
     ./IMAGES/male0171.webp
     ./IMAGES/male0172.webp
     ./IMAGES/male0173.webp
     ./IMAGES/male0174.webp
     ./IMAGES/male0175.webp
     ./IMAGES/male0176.webp
     ./IMAGES/male0177.webp
     ./IMAGES/male0178.webp
     ./IMAGES/male0179.webp
     ./IMAGES/male0180.webp
     ./IMAGES/male0181.webp
     ./IMAGES/male0182.webp
     ./IMAGES/male0183.webp
     ./IMAGES/male0184.webp
     ./IMAGES/male0185.webp
     ./IMAGES/male0186.webp
     ./IMAGES/male0187.webp
     ./IMAGES/male0188.webp
     ./IMAGES/male0189.webp
     ./IMAGES/male0190.webp
     ./IMAGES/male0191.webp
     ./IMAGES/male0192.webp
     ./IMAGES/male0193.webp
     ./IMAGES/male0194.webp
     ./IMAGES/male0195.webp
     ./IMAGES/male0196.webp
     ./IMAGES/male0197.webp
     ./IMAGES/male0198.webp
     ./IMAGES/male0199.webp
     ./IMAGES/male0200.webp
     ./IMAGES/male0201.webp
     ./IMAGES/male0202.webp
     ./IMAGES/male0203.webp
     ./IMAGES/male0204.webp
     ./IMAGES/male0205.webp
     ./IMAGES/male0206.webp
     ./IMAGES/male0207.webp
     ./IMAGES/male0208.webp
     ./IMAGES/male0209.webp
     ./IMAGES/male0210.webp
     ./IMAGES/male0211.webp
     ./IMAGES/male0212.webp
     ./IMAGES/male0213.webp
     ./IMAGES/male0214.webp
     ./IMAGES/male0215.webp
     ./IMAGES/male0216.webp
     ./IMAGES/male0217.webp
     ./IMAGES/male0218.webp
     ./IMAGES/male0219.webp
     ./IMAGES/male0220.webp
     ./IMAGES/male0221.webp
     ./IMAGES/male0222.webp
     ./IMAGES/male0223.webp
     ./IMAGES/male0224.webp
     ./IMAGES/male0225.webp
     ./IMAGES/male0226.webp
     ./IMAGES/male0227.webp
     ./IMAGES/male0228.webp
     ./IMAGES/male0229.webp
     ./IMAGES/male0230.webp
     ./IMAGES/male0231.webp
     ./IMAGES/male0232.webp
     ./IMAGES/male0233.webp
     ./IMAGES/male0234.webp
     ./IMAGES/male0235.webp
     ./IMAGES/male0236.webp
     ./IMAGES/male0237.webp
     ./IMAGES/male0238.webp
     ./IMAGES/male0239.webp
     ./IMAGES/male0240.webp
     ./IMAGES/male0241.webp
     ./IMAGES/male0242.webp
     ./IMAGES/male0243.webp
     ./IMAGES/male0244.webp
     ./IMAGES/male0245.webp
     ./IMAGES/male0246.webp
     ./IMAGES/male0247.webp
     ./IMAGES/male0248.webp
     ./IMAGES/male0249.webp
     ./IMAGES/male0250.webp
     ./IMAGES/male0251.webp
     ./IMAGES/male0252.webp
     ./IMAGES/male0253.webp
     ./IMAGES/male0254.webp
     ./IMAGES/male0255.webp
     ./IMAGES/male0256.webp
     ./IMAGES/male0257.webp
     ./IMAGES/male0258.webp
     ./IMAGES/male0259.webp
     ./IMAGES/male0260.webp
     ./IMAGES/male0261.webp
     ./IMAGES/male0262.webp
     ./IMAGES/male0263.webp
     ./IMAGES/male0264.webp
     ./IMAGES/male0265.webp
     ./IMAGES/male0266.webp
     ./IMAGES/male0267.webp
     ./IMAGES/male0268.webp
     ./IMAGES/male0269.webp
     ./IMAGES/male0270.webp
     ./IMAGES/male0271.webp
     ./IMAGES/male0272.webp
     ./IMAGES/male0273.webp
     ./IMAGES/male0274.webp
     ./IMAGES/male0275.webp
     ./IMAGES/male0276.webp
     ./IMAGES/male0277.webp
     ./IMAGES/male0278.webp
     ./IMAGES/male0279.webp
     ./IMAGES/male0280.webp
     ./IMAGES/male0281.webp
     ./IMAGES/male0282.webp
     ./IMAGES/male0283.webp
     ./IMAGES/male0284.webp
     ./IMAGES/male0285.webp
     ./IMAGES/male0286.webp
     ./IMAGES/male0287.webp
     ./IMAGES/male0288.webp
     ./IMAGES/male0289.webp
     ./IMAGES/male0290.webp
     ./IMAGES/male0291.webp
     ./IMAGES/male0292.webp
     ./IMAGES/male0293.webp
     ./IMAGES/male0294.webp
     ./IMAGES/male0295.webp
     ./IMAGES/male0296.webp
     ./IMAGES/male0297.webp
     ./IMAGES/male0298.webp
     ./IMAGES/male0299.webp
     ./IMAGES/male0300.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
