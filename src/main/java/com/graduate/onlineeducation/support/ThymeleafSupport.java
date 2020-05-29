package com.graduate.onlineeducation.support;

import com.graduate.onlineeducation.entity.Answer;
import com.graduate.onlineeducation.entity.Comment;
import com.graduate.onlineeducation.entity.DO.LikeNews;
import com.graduate.onlineeducation.entity.DTO.QuestionDateDTO;
import com.graduate.onlineeducation.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.ui.Model;

import java.util.List;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/24 8:55
 * @Description:
 */

public class ThymeleafSupport {
    public static void findQuestionPage(Page<Question> pages, String pageNum, Model model) {
        if (pageNum == null) {
            pageNum = "1";
        }
        int pagenum = Integer.parseInt(pageNum);
        model.addAttribute("page", pages);
        model.addAttribute("pageNum", pagenum);
        model.addAttribute("totalPages", pages.getTotalPages());
        model.addAttribute("totalElements", pages.getTotalElements());
    }

    public static void findAnswerPage(Page<Answer> pages, String pageNum, Model model) {
        if (pageNum == null) {
            pageNum = "1";
        }
        int pagenum = Integer.parseInt(pageNum);
        model.addAttribute("page", pages);
        model.addAttribute("pageNum", pagenum);
        model.addAttribute("totalPages", pages.getTotalPages());
        model.addAttribute("totalElements", pages.getTotalElements());
    }

    public static void findCommentPage(Page<Comment> pages, String pageNum, Model model) {
        if (pageNum == null) {
            pageNum = "1";
        }
        int pagenum = Integer.parseInt(pageNum);
        model.addAttribute("page", pages);
        model.addAttribute("pageNum", pagenum);
        model.addAttribute("totalPages", pages.getTotalPages());
        model.addAttribute("totalElements", pages.getTotalElements());
    }

    public static void findMapPage(Page<Map<String, Object>> pages, String pageNum, Model model) {
        if (pageNum == null) {
            pageNum = "1";
        }
        int pagenum = Integer.parseInt(pageNum);
        model.addAttribute("page", pages);
        model.addAttribute("pageNum", pagenum);
        model.addAttribute("totalPages", pages.getTotalPages());
        model.addAttribute("totalElements", pages.getTotalElements());
    }

    public static void findMapForList(List<Map<String, Object>> pages, String pageNum, Model model, Integer totalElements) {
        if (pageNum == null) {
            pageNum = "1";
        }
        int pagenum = Integer.parseInt(pageNum);
        model.addAttribute("page", pages);
        model.addAttribute("pageNum", pagenum);
        model.addAttribute("totalPages", (int)Math.ceil((double)totalElements/(double)10));
        model.addAttribute("totalElements", totalElements);
    }

    public static void findLikeNewsPage(Page<LikeNews> pages, String pageNum, Model model) {
        if (pageNum == null) {
            pageNum = "1";
        }
        int pagenum = Integer.parseInt(pageNum);
        model.addAttribute("page", pages);
        model.addAttribute("pageNum", pagenum);
        model.addAttribute("totalPages", pages.getTotalPages());
        model.addAttribute("totalElements", pages.getTotalElements());
    }

    public static void findQuestionDatePage(Page<QuestionDateDTO> pages, String pageNum, Model model) {
        if (pageNum == null) {
            pageNum = "1";
        }
        int pagenum = Integer.parseInt(pageNum);
        model.addAttribute("page", pages);
        model.addAttribute("pageNum", pagenum);
        model.addAttribute("totalPages", pages.getTotalPages());
        model.addAttribute("totalElements", pages.getTotalElements());
    }
}
