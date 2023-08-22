import { Layout, Topic } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Layout>
      <Topic>{title}</Topic>
      <>{children}</>
    </Layout>
  );
};
