package com.graduate.onlineeducation.service.impl;

import com.graduate.onlineeducation.entity.DTO.CommentDTO;
import com.graduate.onlineeducation.entity.Video;
import com.graduate.onlineeducation.repo.CommentManageRepository;
import com.graduate.onlineeducation.repo.VideoAuditManageRepository;
import com.graduate.onlineeducation.repo.VideoManageRepository;
import com.graduate.onlineeducation.service.VideoAuditManageService;
import com.graduate.onlineeducation.support.ByVideoSpecification;
import com.graduate.onlineeducation.support.PaginationBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/4/15 13:18
 * @Description:
 */
@Service
public class VideoAuditManageServiceImpl implements VideoAuditManageService {
    @Autowired
    private VideoAuditManageRepository videoAuditManageRepository;

    @Autowired
    private CommentManageRepository commentManageRepository;

    @Autowired
    private VideoManageRepository videoManageRepository;

    @Override
    public Page<Video> getVideoNoAuditList(Map<String, Object> params) {
        Specification<Video> specification = new ByVideoSpecification(params);
        return videoAuditManageRepository.findVideoNoAudit(specification, PaginationBase.getPagination(params));
    }

    @Override
    public Page<Video> getVideoNoAuditByUserId(Map<String, Object> params) {
        Integer userId =  Integer.parseInt(params.get("userId").toString());
        return videoAuditManageRepository.getVideoNoAuditByUserId(userId, PaginationBase.getPagination(params));
    }

    @Override
    public Integer getCountVideoNoAuditByUserId(Integer userId) {
        return videoAuditManageRepository.getCountVideoNoAuditByUserId(userId);
    }

    @Override
    public boolean updateVideoAuditPass(Integer id) {
        Video video = videoManageRepository.getVideoById(id);
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setCommentContent("您的视频“" + video.getVideoName() + "”审核已通过。");
        setCommentValue(video, commentDTO);
        int temp = videoAuditManageRepository.updateVideoAuditPass(id);
        if (temp == 1) {
            commentManageRepository.save(commentDTO);
            return true;
        }
        return false;
    }

    private void setCommentValue(Video video, CommentDTO commentDTO) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        commentDTO.setUserId(video.getUser().getId());
        try {
            commentDTO.setCommentDate(formatter.parse(formatter.format(new Date())));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        commentDTO.setCommentLike(0);
        commentDTO.setIsDelete(0);
        commentDTO.setCommentIsWatch(0);
    }

    @Override
    public boolean updateVideoAuditNotPass(Integer id) {
        Video video = videoManageRepository.getVideoById(id);
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setCommentContent("您的视频“" + video.getVideoName() + "”审核未通过，请修改后重新上传。");
        setCommentValue(video, commentDTO);
        int temp = videoAuditManageRepository.updateVideoAuditNotPass(id);
        if(temp == 1){
            commentManageRepository.save(commentDTO);
            return true;
        }
        return false;
    }

    @Override
    public Page<Video> search(Map<String, Object> params) {
        String query = (String) params.get("query");
        return videoAuditManageRepository.findVideoNoPassByParam(query, PaginationBase.getPagination(params));
    }


}
