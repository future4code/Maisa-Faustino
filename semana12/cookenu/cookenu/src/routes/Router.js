import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import AddRecipePage from '../pages/AddRecipePage/AddRecipePage'
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage'
import RecipeListPage from '../pages/RecipeListPage/RecipeListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'


const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path ='/login'>
                <LoginPage/>
            </Route>
            <Route exact path ='/cadastro'>
                <SignUpPage/>
            </Route>
            <Route exact path ='/'>
                <RecipeListPage/>
            </Route>
            <Route exact path ='/adicionar-receitas'>
                <AddRecipePage/>
            </Route>
            <Route exact path ='/detalhe/:id'>
                <RecipeDetailPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )

}

export default Router