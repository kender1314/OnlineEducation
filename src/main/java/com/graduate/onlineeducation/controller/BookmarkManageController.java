package com.graduate.onlineeducation.controller;

import com.graduate.onlineeducation.common.Result;
import com.graduate.onlineeducation.common.ResultUtils;
import com.graduate.onlineeducation.entity.Bookmark;
import com.graduate.onlineeducation.service.BookmarkManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/13 17:22
 * @Description:
 */
@Controller
@RequestMapping("/bookmarkManage")
public class BookmarkManageController {
    @Autowired
    private BookmarkManageService bookmarkManageService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getBookmarksList")
    public Result<Object> getBookmarksList(@RequestParam Map<String, Object> params){
        Page<Bookmark> bookmarks = bookmarkManageService.getBookmarksList(params);
        return ResultUtils.success(bookmarks);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoBookmarksList")
    public Result<Object> getVideoBookmarksList(@RequestParam Map<String, Object> params){
        Page<Bookmark> bookmarks = bookmarkManageService.getVideoBookmarksList(params);
        return ResultUtils.success(bookmarks);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountVideoBookmarks")
    public Result<Object> getCountVideoBookmarks(Integer userId){
        return ResultUtils.success(bookmarkManageService.getCountVideoBookmarks(userId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoBookmarks")
    public Result<Object> getVideoBookmarks(@RequestParam Map<String, Object> params){
        Page<Bookmark> bookmarks = bookmarkManageService.getVideoBookmarks(params);
        return ResultUtils.success(bookmarks);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getVideoBookmarksCount")
    public Result<Object> getVideoBookmarksCount(@RequestParam Map<String, Object> params){
        return ResultUtils.success(bookmarkManageService.getVideoBookmarksCount(params));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionBookmarksList")
    public Result<Object> getQuestionBookmarksList(@RequestParam Map<String, Object> params){
        Page<Bookmark> bookmarks = bookmarkManageService.getQuestionBookmarksList(params);
        return ResultUtils.success(bookmarks);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountQuestionBookmarks")
    public Result<Object> getCountQuestionBookmarks(Integer userId){
        return ResultUtils.success(bookmarkManageService.getCountQuestionBookmarks(userId));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionBookmarks")
    public Result<Object> getQuestionBookmarks(@RequestParam Map<String, Object> params){
        Page<Bookmark> bookmarks = bookmarkManageService.getQuestionBookmarks(params);
        return ResultUtils.success(bookmarks);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getQuestionBookmarksCount")
    public Result<Object> getQuestionBookmarksCount(@RequestParam Map<String, Object> params){
        return ResultUtils.success(bookmarkManageService.getQuestionBookmarksCount(params));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/insertBookmark")
    public Result<Object> insertBookmark(){
        return ResultUtils.success(true);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateBookmarkOfVideo")
    public Result<Object> updateBookmarkOfVideo(@RequestParam Map<String, Object> params){
        return ResultUtils.success(bookmarkManageService.updateBookmarkOfVideo(params));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/updateBookmarkOfQuestion")
    public Result<Object> updateBookmarkOfQuestion(@RequestParam Map<String, Object> params){
        return ResultUtils.success(bookmarkManageService.updateBookmarkOfQuestion(params));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteBookmarkOfVideo")
    public Result<Object> deleteBookmarkOfVideo(@RequestParam Map<String, Object> params){
        return ResultUtils.success(bookmarkManageService.deleteBookmarkOfVideo(params));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteBookmarkOfQuestion")
    public Result<Object> deleteBookmarkOfQuestion(@RequestParam Map<String, Object> params){
        return ResultUtils.success(bookmarkManageService.deleteBookmarkOfQuestion(params));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteBookmarkById")
    public Result<Object> deleteBookmarkById(Integer id){
        return ResultUtils.success(bookmarkManageService.deleteBookmarkById(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/deleteBookmarkByQuestionId")
    public Result<Object> deleteBookmarkByQuestionId(Integer id){
        return ResultUtils.success(bookmarkManageService.deleteBookmarkByQuestionId(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountBookmarkByVideoId")
    public Result<Object> getCountBookmarkByVideoId(Integer id){
        return ResultUtils.success(bookmarkManageService.getCountBookmarkByVideoId(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getCountBookmarkByQuestionId")
    public Result<Object> getCountBookmarkByQuestionId(Integer id){
        return ResultUtils.success(bookmarkManageService.getCountBookmarkByQuestionId(id));
    }
}
