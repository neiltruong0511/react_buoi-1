import React from "react"
import {
  BsBriefcase,
  BsCloudDownload,
  BsChatLeftText,
  BsBootstrap,
  BsCodeSlash,
  BsPatchCheck,
} from "react-icons/bs"
import Card from "./Card"


const items = [
  {
    icon: <BsBriefcase />,
    title: "Fresh new layout",
    desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
  },
  {
    icon: <BsCloudDownload />,
    title: "Free to download",
    desc: "As always, Start Bootstrap has a powerful collection of free templates.",
  },
  {
    icon: <BsChatLeftText />,
    title: "Jumbotron hero header",
    desc: "The heroic part of this template is the jumbotron hero header!",
  },
  {
    icon: <BsBootstrap />,
    title: "Feature boxes",
    desc: "We've created some custom feature boxes using Bootstrap icons!",
  },
  {
    icon: <BsCodeSlash />,
    title: "Simple clean code",
    desc: "We keep our dependencies up to date and squash bugs as they come!",
  },
  {
    icon: <BsPatchCheck />,
    title: "A name you trust",
    desc: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
  },
]

const Item = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {items.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  )
}

export default Item