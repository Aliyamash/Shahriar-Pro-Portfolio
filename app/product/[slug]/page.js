export const dynamic = 'force-dynamic';
export const revalidate = false;
import { getFetch } from "@/utils/fetch";
import pic1 from "@/public/img/portfolio-one.png";
import pic2 from "@/public/img/portfolio-two.png";
import Image from "next/image";
import RedbasketShop from "@/public/icon-shahriarh/products/redBasket.png";
import StarRating from "@/components/StarRating";

export default async function ProductSolo({ params }) {
  const { slug } = params;
  const soloProduct = await getFetch(`/1234/product/${slug}`);

  // اگه محصول پیدا نشد
  if (!soloProduct.success || !soloProduct.title) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-redBody">Product Not Found!</h1>
        <p className="mt-4 text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="my-10">
          <div className="w-full h-full flex flex-col lg:flex-row items-start gap-10">
            {/* توضیحات */}
            <div className="lg:w-3/5 md:mt-32">
              <h1 className="text-4xl mb-10 lg:text-6xl font-black" data-aos="fade-down">
                {soloProduct.title}
              </h1>

              <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-10" data-aos="fade-right" data-aos-delay="300">
                {soloProduct.description}
              </p>

              <div className="flex flex-wrap gap-3 my-8">
                {soloProduct.features?.map((feature, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 text-black rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-10 mt-12" data-aos="fade-up" data-aos-delay="500">
                <StarRating rating={soloProduct.points} />
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image src={RedbasketShop} width={20} alt="basket" />
                    <del className="text-gray-500">${soloProduct.main_price}</del>
                  </div>
                  <h1 className="text-redBody font-black text-3xl lg:text-4xl">
                    ${soloProduct.discount_price}
                  </h1>
                </div>
              </div>

              <button className="mt-12 px-8 py-5 bg-redBody text-white rounded-xl hover:bg-red-700 transition text-lg font-bold">
                Buy Now - 65,485,555
              </button>
            </div>

            {/* عکس‌ها */}
            <div className="lg:w-2/5 space-y-6">
              <Image
                src={pic1}
                alt={soloProduct.title}
                className="rounded-3xl shadow-xl"
                width={550}
                height={400}
                data-aos="fade-left"
              />
              <Image
                src={pic2}
                alt={`${soloProduct.title} preview`}
                className="rounded-3xl shadow-xl hidden lg:block"
                width={550}
                height={400}
                data-aos="fade-left"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}