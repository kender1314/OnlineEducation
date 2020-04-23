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
@RequestMapping("/bookManage")
public class BookmarkManageController {
    @Autowired
    private BookmarkManageService bookmarkManageService;

    public Result<Object> createBookmark(){
        return null;
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/getBookmarksList")
    public Result<Object> getBookmarksList(@RequestBody Map<String, Object> params){
        Page<Bookmark> bookmarks = bookmarkManageService.getBookmarksList(params);
        return ResultUtils.success(bookmarks);
    }

}
