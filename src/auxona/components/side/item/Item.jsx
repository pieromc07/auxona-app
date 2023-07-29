import { PropTypes } from "prop-types"
import { SubItem } from "../subItem/SubItem"

import "./item.css"

export const Item = ({subItems, title}) => {
  return (
    <ul className="side__item">
      <li className="side__item--title"
      >{title}</li>
      {subItems.map((item, index) => (
        <SubItem key={index} icon={item.icon} link={item.link} url={item.url} />
      ))}
    </ul>
  )
}

Item.defaultProps = {
  menu: [
    {
      icon: "bi bi-compass-fill",
      link: "Explore",
    },
    {
      icon: "bi bi-volume-down-fill",
      link: "Genres",
    },
    {
      icon: "bi bi-disc-fill",
      link: "Albums",
    },
    {
      icon: "bi bi-mic-fill",
      link: "Artists",
    }
  ],
  title: "Menu"
}

Item.propTypes = {
  subItems: PropTypes.array,
  title: PropTypes.string
}
