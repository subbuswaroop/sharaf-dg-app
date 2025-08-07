import ProductCard from './ProductCard'

const FeaturedProducts = ({ sectionData, data }) => {
  return (
      <section className="py-8 sm:py-12 md:py-16">
        <div className="">
          <div className="flex flex-wrap items-center justify-between mb-2 sm:mb-3 md:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-2 sm:mb-3 md:mb-4">
              {sectionData?.title}
            </h2>
            <span className="underline underline-offset-[6px] cursor-pointer ml-2 sm:ml-3 md:ml-4 text-sm sm:text-base md:text-lg text-gray-600">
              {sectionData?.cta.text}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.isArray(data) && data.map((product, indx) => (
              <ProductCard key={product.id} product={product} indx={indx} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturedProducts;