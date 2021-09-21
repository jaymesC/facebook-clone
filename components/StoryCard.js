import Image from 'next/image'

function StoryCard({name, src, profile}) {
    return (
      <div className="relative h-14 w-14 md:">
        <Image
          className=" absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
          src={profile}
          width={30}
          height={30}
          layout="fixed"
          objectFit="cover"
          alt="Sidebar logo image "
        />
        <Image
          className=" object-cover filter brightness-75 rounded-full lg:rounded-3xl"
          src={src}
          layout="fill"
          alt="Sidebar logo image "
        />
      </div>
    );
}

export default StoryCard
