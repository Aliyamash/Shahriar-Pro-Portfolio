

// app/product/[slug]/page.js – نسخه نهایی برای Vercel

import { getFetch } from "@/utils/fetch";
import pic1 from "@/public/img/portfolio-one.png";
import pic2 from "@/public/img/portfolio-two.png";
import Image from "next/image";
import RedbasketShop from "@/public/icon-shahriarh/products/redBasket.png";
import StarRating from "@/components/StarRating";

// این خطا رو حل می‌کنه! Vercel دیگه سعی نمی‌کنه استاتیک بسازه
export const dynamic = 'force-dynamic';
export const revalidate = false;

// اینم اضافه کن تا موقع build ارور نده
export async function generateStaticParams() {
  return []; // یعنی هیچ صفحه‌ای استاتیک ساخته نشه
}

export default async function ProductSolo({ params }) {
  const { slug } = params;

  // اگه slug نباشه، یه صفحه 404 نشون بده
  if (!slug) {
    return <div>Product not found</div>;
  }

  const soloProduct = await getFetch(`/1234/product/${slug}`);

  // اگه محصول پیدا نشد
  if (!soloProduct?.success || !soloProduct.title) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">Product Not Found!</h1>
        <p className="mt-4 text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* توضیحات */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-black mb-8">{soloProduct.title}</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {soloProduct.description}
            </p>

            {soloProduct.features && (
              <div className="flex flex-wrap gap-3 mb-8">
                {soloProduct.features.map((f, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                    {f}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-8 mb-10">
              <StarRating rating={soloProduct.points || 5} />
              <div className="flex items-center gap-4">
                <Image src={RedbasketShop} width={24} alt="price" />
                <del className="text-gray-500">${soloProduct.main_price}</del>
                <span className="text-3xl font-black text-red-600">
                  ${soloProduct.discount_price}
                </span>
              </div>
            </div>

            <button className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-lg font-bold">
              Buy Now
            </button>
          </div>

          {/* عکس‌ها */}
          <div className="space-y-6">
            <Image
              src={pic1}
              alt={soloProduct.title}
              className="rounded-3xl shadow-2xl w-full"
              width={600}
              height={400}
            />
            <Image
              src={pic2}
              alt="Preview"
              className="rounded-3xl shadow-2xl w-full hidden lg:block"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}