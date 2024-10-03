import { forwardRef, useState } from 'react'
import { cva, cx, type FormInput, FormInputVariants, FocusRingVisible, FocusRingWithin, NoOutlines } from '../../lib'
import { Eye, EyeClosed, CurrencyDollar } from '@phosphor-icons/react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
const ui = cva(FormInputVariants)

export const Input = {
  Text: forwardRef<HTMLInputElement, FormInput>(
    ({ className, size, ...props }, ref) => {
      return (
        <input
          className={cx(
            ui({ size }),
            FocusRingVisible,
            className,
          )}
          ref={ref}
          {...props}
        />
      )
    }),
  Password: forwardRef<HTMLInputElement, FormInput>(
    ({ className, size, ...props }, ref) => {
      const [showPassword, setShowPassword] = useState(false)
      return (
        <div className={cx('flex items-center rounded', FocusRingWithin)}>
          <input
            className={cx(
              ui({ size }),
              NoOutlines,
              className,
            )}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            {...props}
          />
          <button className="pr-3" onClick={() => setShowPassword(!showPassword)}>
            { showPassword ? <Eye size={18} /> : <EyeClosed size={18} /> }
          </button>
        </div>
      )
    },
  ),
  Money: forwardRef<HTMLInputElement, FormInput & { maskOptions?: object }>(
    ({ className, size, maskOptions = {}, ...props }, ref) => {
      const currencyMask = createNumberMask({
        prefix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: ',',
        allowDecimal: true,
        decimalSymbol: '.',
        decimalLimit: 2,
        allowNegative: false,
        allowLeadingZeroes: false,
        ...maskOptions,
      })
      return (
        <div className={cx('flex items-center rounded', FocusRingWithin)}>
          <span className="pl-2.5 -mr-1 opacity-75">
            <CurrencyDollar size={18} />
          </span>
          <MaskedInput
            mask={currencyMask}
            render={(inputRef, renderProps) => (
              <input
                ref={(node) => {
                  if (node) {
                    inputRef(node)
                    if (typeof ref === 'function') {
                      ref(node)
                    }
                    else if (ref) {
                      ref.current = node
                    }
                  }
                }}
                className={cx(
                  ui({ size }),
                  NoOutlines,
                  className)}
                {...renderProps}
                {...props}
              />
            )}
          />
        </div>
      )
    },
  ),
}
