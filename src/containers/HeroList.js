import {connect} from 'react-refetch'
import HeroList from "../organisms/HeroList";
import React from 'react'


const HeroListContainer = ({heroesFetch}) => {
    if (!heroesFetch.fulfilled) {
        return null
    }

    return (<HeroList heroList={heroesFetch.value.heroList}/>)
};


const withHeroes = connect(props => ({
    heroesFetch: 'http://demo2943572.mockable.io/heroList',
}));

export default withHeroes(HeroListContainer)
