import { useEffect, useState } from "react"

import useWindowSize from "../../helpers/useWindowSizeHook"

interface IIconProps {
  width: string;
  height: string;
}

const SVG_ProductBye: React.FC = () => {
  const [sizeIcon, setSizeIcon] = useState<IIconProps>({
    width: '68',
    height: '80'
  })
  const { width } = useWindowSize()

  useEffect(() => {
    const newSizeIcon: IIconProps = {
      width: '',
      height: '',
    }
    if (width >= 1024) {
      newSizeIcon.width = '68'
      newSizeIcon.height = '80'
    } else if (width < 1024 && width >= 700) {
      newSizeIcon.width = '40'
      newSizeIcon.height = '47'
    }
    setSizeIcon(() => {
      return newSizeIcon
    })
  }, [width])

  return (
    <svg width={sizeIcon.width} height={sizeIcon.height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_14:235)">
        <path d="M0.329262 79.6235C0.54887 79.8588 0.878282 80 1.20769 80H66.541C66.8704 80 67.1842 79.8588 67.4194 79.6235C67.6391 79.3882 67.7645 79.0588 67.7489 78.7294L65.0194 25.6471C65.0194 25.6314 65.0194 25.6157 65.0194 25.6C65.0194 25.5529 65.0038 25.5059 65.0038 25.4588V25.4275C65.0038 25.4118 65.0038 25.3961 65.0038 25.3961C64.9881 25.3333 64.9724 25.2706 64.941 25.2235C64.941 25.2078 64.9253 25.2078 64.9253 25.1922L64.894 25.1294C64.894 25.1137 64.8783 25.098 64.8783 25.0824L60.7998 18.2745C60.5802 17.9137 60.1881 17.6941 59.7645 17.6941H57.2547L58.243 13.4431C58.3214 13.1294 58.2587 12.8 58.1018 12.5333C57.9293 12.2667 57.6626 12.0627 57.3489 12L45.0822 9.12941L45.0665 9.03529C43.9214 3.79608 39.2312 0 33.8665 0C30.243 0 26.792 1.75686 24.643 4.6902C24.5959 4.75294 24.5489 4.84706 24.5018 4.94118L24.4704 5.01961L9.09789 6.83922C8.43906 6.91765 7.96848 7.51373 8.04691 8.17255L9.17632 17.6941H8.01554C7.59201 17.6941 7.19985 17.9137 6.98024 18.2745L2.90181 25.0824C2.88612 25.098 2.88612 25.1294 2.87044 25.1451L2.85475 25.1922C2.82338 25.2706 2.79201 25.3333 2.77632 25.3961V25.4275C2.76063 25.4902 2.76063 25.5529 2.74495 25.6157V25.6471L-0.000149471 78.7294C-0.0158357 79.0588 0.109654 79.3882 0.329262 79.6235ZM56.6587 20.1098H59.0587L61.694 24.502H55.6391L56.6587 20.1098ZM55.592 14.0706L53.1449 24.502H45.0195L42.494 13.9922C42.4155 13.6784 42.2273 13.4118 41.9449 13.2392C41.6783 13.0667 41.3489 13.0196 41.0351 13.098L38.5881 13.6941L39.3881 10.2745L55.592 14.0706ZM42.5567 24.502H21.8351L20.8626 20.4392L40.4547 15.7333L42.5567 24.502ZM28.4077 4.25098C29.9763 3.05882 31.9214 2.4 33.8665 2.4C37.5685 2.4 40.9567 4.73726 42.29 8.21961L42.3998 8.50196L38.7763 7.6549C38.4626 7.57647 38.1332 7.63922 37.8665 7.81176C37.5998 7.98431 37.3959 8.25098 37.3332 8.56471L35.9842 14.3373L34.3371 14.7294L33.2077 5.20784C33.1763 4.89412 33.0038 4.59608 32.7528 4.40784C32.5018 4.20392 32.1881 4.12549 31.8587 4.15686L27.9528 4.61176L28.4077 4.25098ZM30.9489 6.68235L31.9685 15.2941L19.1214 18.3843C18.4783 18.5412 18.0704 19.1843 18.2273 19.8431L19.3567 24.5176H12.392L10.5724 9.08235L30.9489 6.68235ZM8.69005 20.1098H9.44299L9.96063 24.502H6.03907L8.69005 20.1098ZM2.47828 77.4275L5.06652 26.9176H62.6665V27.0588L65.2547 77.5843H2.47828V77.4275Z" fill="black" />
        <path d="M33.867 54.1333C40.1572 54.1333 45.2866 49.0196 45.2866 42.7137V37.6L45.3965 37.5686C46.9651 37.0196 48.0161 35.5294 48.0161 33.8666C48.0161 31.7019 46.2592 29.9451 44.0945 29.9451C41.9298 29.9451 40.1729 31.7019 40.1729 33.8666C40.1729 35.5294 41.2239 37.0039 42.7925 37.5686L42.9023 37.6V42.7137C42.9023 47.6862 38.8553 51.7176 33.8984 51.7176C28.9259 51.7176 24.8945 47.6706 24.8945 42.7137V37.6L25.0043 37.5686C26.5729 37.0196 27.6239 35.5294 27.6239 33.8666C27.6239 31.7019 25.867 29.9451 23.7023 29.9451C21.5376 29.9451 19.7808 31.7019 19.7808 33.8666C19.7808 35.5294 20.8317 37.0039 22.4004 37.5686L22.5102 37.6V42.7137C22.4631 49.0196 27.5768 54.1333 33.867 54.1333ZM42.8396 34.7764L42.7298 34.5411C42.62 34.3215 42.5729 34.1019 42.5729 33.8823C42.5729 33.051 43.2474 32.3608 44.0945 32.3608C44.9415 32.3608 45.6161 33.0353 45.6161 33.8823C45.6161 34.149 45.5376 34.4 45.4121 34.6353L45.271 34.8706L45.1298 34.6353C44.9102 34.2588 44.518 34.0392 44.0945 34.0392H43.9847C43.5925 34.0392 43.2161 34.2274 42.9965 34.5568L42.8396 34.7764ZM22.3533 34.6353C22.2121 34.4 22.1494 34.1333 22.1494 33.8823C22.1494 33.051 22.8239 32.3608 23.671 32.3608C24.518 32.3608 25.1925 33.0353 25.1925 33.8823C25.1925 34.149 25.1141 34.4 24.9886 34.6353L24.8474 34.8706L24.7063 34.6353C24.4866 34.2588 24.0945 34.0392 23.671 34.0392C23.2474 34.0392 22.8553 34.2588 22.6357 34.6353L22.4945 34.8706L22.3533 34.6353Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_14:235">
          <rect width="67.749" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SVG_ProductBye