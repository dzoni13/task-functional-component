import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
    loadMenuItems,
} from "../../actions/footballAction.js";
import FootballMatch from "./FootballMatch";

import "./index.css";

const yearsList = [2011, 2012, 2013, 2014, 2015, 2016, 2017];

const FootballMatches = ({ matches }) => {

    const dispatch = useDispatch();
    const [year, setYear] = useState("")

    function renderItems() {
        return matches?.map((item, i) => {
            return (
                <FootballMatch
                    key={i}
                    item={item}
                />
            );
        });
    }

    function renderYears() {
        return yearsList.map((item, i) => {
            return (
                <li key={i} className={item === year ? "listYear listYear_border" : "listYear"} onClick={() => getMenuItemByTag(item)}>{item}</li>
            )
        })
    }

    function getMenuItemByTag(year) {
        setYear(year)
        dispatch(loadMenuItems(year));
    }

    return (
        <>
            <div className="container">
                <div className="listYearWraper">
                    <h3>Select Year</h3>
                    <ul>
                        {renderYears()}
                    </ul>
                </div>

                <div className="listElementContainer">
                    {matches?.length === 0 && year !== "" &&
                        <h3 className="display">No Matches Found</h3>
                    }
                    {matches?.length > 0 &&
                        <>
                            <h2 className="display">Total Matches : {matches?.length} </h2>
                            <ul className="listStyle">
                                {renderItems()}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    matches: state.footballReducer.matches,
});

export default connect(mapStateToProps)(FootballMatches);