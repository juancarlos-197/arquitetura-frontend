import { Routes } from "@angular/router";
import { ArticleList } from "./article-list/article-list";
import { ArticleDetail } from "./article-detail/article-detail";


export const ARTICLES_ROUTES: Routes = [
    {
        path: '', component: ArticleList
    },
    {
        path: ':id', component: ArticleDetail
    },
]
