// app/products/[slug]/page.js

import { getFetch } from "@/utils/fetch";
import pic1 from "@/public/img/portfolio-one.png";
import pic2 from "@/public/img/portfolio-two.png";
import Image from "next/image";
import RedbasketShop from "@/public/icon-shahriarh/products/redBasket.png";
import StarRating from "@/components/StarRating";

// این ۳ خط حیاتی هستن!
export const dynamic = "force-dynamic";
export const revalidate = false;
export async function generateStaticParams() {
  return []; // هیچ صفحه‌ای استاتیک ساخته نشه
}

export default async function ProductSolo({ params }) {
  const { slug } = params || {};

  if (!slug) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">
          404 - Product Not Found
        </h1>
      </div>
    );
  }

  const soloProduct = await getFetch(`/1234/product/${slug}`);

  if (!soloProduct?.success || !soloProduct.title) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">Product Not Found</h1>
        <p className="mt-4 text-gray-600">
          The product you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 justify-between gap-10">
          <div className="mt-32" >
            <h1 className="text-5xl font-black mb-8" data-aos="fade-down">{soloProduct.title}</h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
              {soloProduct.description}
            </p>

            {soloProduct.features && (
              <div className="flex flex-wrap gap-3 mb-10">
                {soloProduct.features.map((f, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium text-black"
                  >
                    {f}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-8 mb-10" data-aos="fade-up" data-aos-delay="500">
              <StarRating rating={soloProduct.points || 5} />
              <div className="flex items-center gap-4">
                <Image src={RedbasketShop} width={28} alt="price" />
                <del className="text-xl text-gray-100">
                  ${soloProduct.main_price}
                </del>
                <span className="text-redBody font-black text-3xl lg:text-4xl">
                  ${soloProduct.discount_price}
                </span>
              </div>
            </div>

            <button className="mt-12 px-8 py-5 bg-redBody text-white rounded-xl hover:bg-red-700 transition text-lg font-bold">
              Buy Now
            </button>
          </div>

          <div className=" space-y-6 mx-auto">
            <Image
              src={pic1}
              alt={soloProduct.title}
              width={475}
              height={325}
              className="rounded-3xl shadow-2xl "
              data-aos="fade-left"
            />
            <Image
              src={pic2}
              alt="Preview"
              width={475}
              height={325}
              className="rounded-3xl shadow-2xl hidden lg:block"
              data-aos="fade-left"
              data-aos-delay="200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
