import { Favorite } from '../../../../components/buttons/favorite/Favorite'
import { Listen } from '../../../../components/buttons/listen/Listen'
import './Action.css'
export const Action = () => {
  return (
    <div className='au--actions'>
      <Listen text='Mix' icon='bi bi-play-fill' />
      <Favorite isfavorite={true} />
    </div>
  )
}
