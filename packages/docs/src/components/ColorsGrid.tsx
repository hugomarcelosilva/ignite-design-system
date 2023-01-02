import { colors, space, fonts } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: space[8] }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: fonts.code,
            color:
              getContrast(color, colors.white) < 3.5
                ? colors.black
                : colors.white,
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
