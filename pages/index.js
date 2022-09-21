import styled from "styled-components";
import HeadTag from "../components/Head";
import ProgressBarWithLabel from "@/components/ProgressBarWithLabel";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  grid-gap: 20px;

  .dash {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 8px;
  }
`;

export default function Home() {
  return (
    <div>
      <HeadTag
        title="Dash template"
        metaDescription="Template com componentes para uso em Dashboards"
        keywords=""
      />
      <Grid>
        <div className="dash">1</div>
        <div className="dash">
          {" "}
          <ProgressBarWithLabel
            title="Lucro"
            actualValue="250"
            valueTotal="500"
            percent="90"
          />
        </div>
        <div className="dash">
          {" "}
          <ProgressBarWithLabel
            title="Lucro"
            actualValue="250"
            valueTotal="500"
            percent="90"
          />
        </div>
        <div className="dash">
          <ProgressBarWithLabel
            title="Lucro"
            actualValue="250"
            valueTotal="500"
            percent="90"
          />
        </div>
      </Grid>
    </div>
  );
}
