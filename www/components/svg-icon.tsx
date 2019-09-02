import { css } from 'emotion'
import theme from '../lib/theme'

const SvgIcon = ({ viewBox, children, ...props }) => (
  <svg viewBox={viewBox} className={css`
    user-select: none;
    height: 1em;
    width: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: ${theme.pxToRem(24)};
  `} {...props}>
    {children}
  </svg>
)

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24'
}

export default SvgIcon