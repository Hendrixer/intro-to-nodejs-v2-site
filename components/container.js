const Container = ({ children, className }) => (
  <div className={`container w-full max-w-screen-lg my-0 mx-auto ${className}`}>{children}</div>
)

export default Container
