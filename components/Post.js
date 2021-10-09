import Image from "next/image";

function Post({ name, message, email, timestamp, postImage, image }) {
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <Image
            className="rounded-full"
            src={image}
            alt=""
            width={40}
            height={40}
          />
          <div>
            <p>{name}</p>

            <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
