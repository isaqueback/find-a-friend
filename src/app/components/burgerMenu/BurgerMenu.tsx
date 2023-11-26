import styles from './burgerMenu.module.sass'

interface BurgerMenuProps {
  isOpen: boolean
  handleToggleAsideMenu: () => void
  color?: string
}

export default function BurgerMenu({
  isOpen,
  handleToggleAsideMenu,
  color,
}: BurgerMenuProps) {
  return (
    <div
      className={`lg:hidden ${styles.burgerMenuContainer}`}
      onClick={handleToggleAsideMenu}
    >
      <span
        className={`${color || 'bg-white'} ${isOpen && styles.open} ${
          styles.burgerMenu
        }`}
      ></span>
    </div>
  )
}
