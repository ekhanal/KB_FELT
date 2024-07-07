interface Props {
  children: React.ReactElement;
}

const Main: React.FC<Props> = ({ children }) => {
  return <div className=" primary-color">{children}</div>;
};

export default Main;
