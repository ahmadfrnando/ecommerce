// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';

const $namaToko = 'Nashop';

const TestimonialsData = [
  {
    id: 1,
    name: 'Sarah A.',
    text: 'Belanja di ' + $namaToko + 'sangat memuaskan! Produk-produk yang ditawarkan berkualitas tinggi dan pengirimannya sangat cepat. Saya pasti akan kembali berbelanja di sini. Terima kasih!',
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Budi',
    text: 'Saya sangat senang dengan layanan yang diberikan. Customer service-nya sangat responsif dan membantu saya memilih produk yang tepat. Pengalaman belanja yang sangat menyenangkan!',
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: 'Mira Khusnul',
    text: 'Produk yang saya beli di' + $namaToko + ' persis seperti yang diiklankan. Kualitasnya luar biasa dan harganya sangat terjangkau. Saya merekomendasikan toko ini kepada semua teman saya!',
    img: 'https://picsum.photos/103/103',
  },
  {
    id: 4,
    name: 'Rizky',
    text: 'Pengiriman super cepat dan produk datang dalam kondisi sempurna. Sungguh pengalaman belanja online yang luar biasa. Terima kasih, ' + $namaToko,
    img: 'https://picsum.photos/104/104',
  },
  {
    id: 5,
    name: 'Dewi',
    text: 'Ini pertama kalinya saya belanja di ' + $namaToko + ' dan saya sangat puas. Proses pemesanan sangat mudah dan saya mendapatkan produk dalam waktu singkat. Pasti akan belanja lagi!',
    img: 'https://picsum.photos/105/105',
  },
  {
    id: 6,
    name: 'Andi',
    text: 'Saya suka berbelanja di sini karena koleksi produknya lengkap dan selalu up-to-date. Harga yang ditawarkan juga kompetitif dan sering ada promo menarik. Luar biasa!',
    img: 'https://picsum.photos/106/106',
  },
  {
    id: 7,
    name: 'Rina',
    text: 'Produk yang saya beli sangat sesuai dengan deskripsinya. Kualitasnya sangat baik dan saya sangat puas dengan pembelian ini. Pelayanannya juga sangat ramah dan cepat!',
    img: 'https://picsum.photos/107/107',
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'Linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="py-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Check this testimonials from our customers here
          </p>
        </div>
        {/* Testimonials Card */}
        <div
        data-aos="zoom-in"
        >
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className='my-6'>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light ">{data.name}</h1>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
