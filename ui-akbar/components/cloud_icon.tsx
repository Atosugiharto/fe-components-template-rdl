type CloudIconProps = React.SVGProps<SVGSVGElement>;

export default function CloudIcon(props: CloudIconProps) {
  return (
    <svg
      width="60"
      height="81"
      viewBox="0 0 60 81"
      fill="currentColor" // kunci biar bisa dikontrol pakai text-*
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.3293 58.1956C25.4083 51.6139 29.0659 41.0355 31.1411 30.161C34.2454 13.894 47.1929 0 63.7535 0C79.9059 0 93 13.0941 93 29.2465V82.8392C93 109.073 71.0921 129.978 44.8808 128.902C42.6321 128.81 40.4105 128.719 38.2344 128.632C18.6611 127.849 -0.452212 115.066 0.0210238 95.483C0.255208 85.7921 2.41695 78.0884 5.05385 72.5087C7.97451 66.3286 14.6914 63.217 19.3293 58.1956Z" />
    </svg>
  );
}
