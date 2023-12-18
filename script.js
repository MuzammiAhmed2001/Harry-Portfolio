// document.addEventListener("DOMContentLoaded", function () {
//     $('.sec6-imges').slick({
//         dots: true,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//         ]
//     })
// })


// ::selection{
//     background: rgba(187, 134, 252, 0.5);
//     color: #FFF;
//   }
  
//   .container{
//     max-width: 950px;
//     width: 100%;
//     padding: 50px 40px;
//     margin: 0px 20px;
//     border-radius: 12px;
//     background: #22272C;
//     box-shadow: 0px 4px 16px rgba(254, 205, 211, 0.1), 0px 8px 24px rgba(254, 205, 211, 0.1), 0px 16px 56px rgba(254, 205, 211, 0.1);
//   }
  
//   .container .topic{
//     font-size: 30px;
//     font-weight: 500;
//     margin-bottom: 20px;
//     color: rgba(255, 255, 255, 0.7);
//   }
  
//   .content input{
//     display: none;
//   }
  
//   .content{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
  
//   .content .list{
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     width: 20%;
//     margin-right: 50px;
//   }
  
//   .content .list label{
//     cursor: pointer;
//     height: 60px;
//     line-height: 60px;
//     font-size: 22px;
//     font-weight: 500;
//     color: rgba(255, 255, 255, 0.5);
//     padding-left: 25px;
//     transition: all 0.5s ease;
//     z-index: 10;
//   }
  
//   #home:checked ~ .list label.home,
//   #blog:checked ~ .list label.blog,
//   #help:checked ~ .list label.help,
//   #code:checked ~ .list label.code,
//   #about:checked ~ .list label.about{
//     color: #22272C;
//   }
  
//   .content .slider{
//     position: absolute;
//     left: 0;
//     top: 0;
//     height: 60px;
//     width: 100%;
//     border-radius: 12px;
//     transition: all 0.5s ease;
    
//     background: #BB86FC;
//   }
  
//   #home:checked ~ .list .slider{
//     top: 0;
//   }
  
//   #blog:checked ~ .list .slider{
//     top: 60px;
//   }
  
//   #help:checked ~ .list .slider{
//     top: 120px;
//   }
  
//   #code:checked ~ .list .slider{
//     top: 180px;
//   }
  
//   #about:checked ~ .list .slider{
//     top: 240px;
//   }
  
//   .content .text-content{
//     width: 80%;
//     height: 100%;
//     color: rgba(255, 255, 255, 0.7);
//   }
  
//   .content .text{
//     display: none;
//   }
  
//   .content .text .title{
//     font-size: 25px;
//     margin-bottom: 10px;
//     font-weight: 500;
//   }
  
//   .container .text p{
//     text-align: justify;
//   }
  
//   .content .text-content .home{
//     display: block;
//   }
  
//   #home:checked ~ .text-content .home,
//   #blog:checked ~ .text-content .blog,
//   #help:checked ~ .text-content .help,
//   #code:checked ~ .text-content .code,
//   #about:checked ~ .text-content .about{
//     display: block;
//   }
  
//   #blog:checked ~ .text-content .home,
//   #help:checked ~ .text-content .home,
//   #code:checked ~ .text-content .home,
//   #about:checked ~ .text-content .home{
//     display: none;
//   }
  
//   .content .list label:hover{
//     color: #BB86FC;
//   }