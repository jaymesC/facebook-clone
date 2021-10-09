import Stories from "./Stories"
import InputBox from "./InputBox"
import Posts from "./Posts"
import Contact from "./Contact"

function Feed({posts}) {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg">
                <Stories />
                <InputBox />
                <Posts posts={posts}/>
            </div>
            {contacts.map(contact => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        </div>
    )
}

export default Feed
