import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Table from "../../components/table/table";
import ArrowIcon from "../../assets/icon/arrowIcon"
import "./mainLayout.css"


function MainLayout() {
  return (
    <>
     <div className="wrapper">
     <Header />
      <main>
        <div className="main__header">
          <div className="main_top">
            <h1 className="title">Alltickets</h1>
            <div className="main_box">
              <p className="sort">Sort</p>
              <p className="filter">Filter</p>
            </div>
            </div>
            <Table/>
            <div className="main_bottom">
                <div className="bottom_box">
                    <div className="pages">
                    <p className="per_page">Rows per page:</p>
                    <p className="number">8</p>
                    </div>
                    <div className="next">
                        <p className="text"> 1-8 of 1240</p>
                        <div className="buttons">
                            <button className="left">
                                <ArrowIcon/>
                            </button>
                            <button className="rigth">
                                <ArrowIcon/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
         
            
        </div>
      </main>
      <Footer />
     </div>
    </>
  );
}

export default MainLayout;
