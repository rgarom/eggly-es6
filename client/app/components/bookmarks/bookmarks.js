import angular from 'angular';
import bookmarksComponent from './bookmarks.component';

const BookmarksModule = angular.module('bookmarks', [
    SaveBookmarksModule.name
  ])
  .component('bookmarks', bookmarksComponent);

export default BookmarksModule;
