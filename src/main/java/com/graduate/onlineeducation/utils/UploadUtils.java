package com.graduate.onlineeducation.utils;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesUserIdDTO;
import com.graduate.onlineeducation.entity.DTO.VideoUserIdDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.UUID;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/23 13:11
 * @Description:
 */

public class UploadUtils {
    private static Logger logger = LoggerFactory.getLogger(UploadUtils.class);

    public static void uploadImage(VideoDTO video, MultipartFile image) {
        try {
            String fileName = System.currentTimeMillis()+image.getOriginalFilename();
            String destFileName="D:\\ideaIU\\work-please\\OnlineEducation\\src\\main\\resources\\static\\images\\imageFile"+File.separator+fileName;
            video.setVideoImage(fileName);
            video.setVideoImageUrl("http://localhost:8080/images/imageFile/" + fileName);
            File destFile = new File(destFileName);
            destFile.getParentFile().mkdirs();
            image.transferTo(destFile);
        } catch (IOException e) {
            logger.info("视频封面上传错误->>>>" + e);
        }
    }

    public static void uploadImage(VideoUserIdDTO video, MultipartFile image) {
        try {
            String fileName = System.currentTimeMillis()+image.getOriginalFilename();
            String destFileName="D:\\ideaIU\\work-please\\OnlineEducation\\src\\main\\resources\\static\\images\\imageFile"+File.separator+fileName;
            video.setVideoImage(fileName);
            video.setVideoImageUrl("http://localhost:8080/images/imageFile/" + fileName);
            File destFile = new File(destFileName);
            destFile.getParentFile().mkdirs();
            image.transferTo(destFile);
        } catch (IOException e) {
            logger.info("视频封面上传错误->>>>" + e);
        }
    }

    public static void uploadImageSeries(VideoSeriesUserIdDTO videoSeriesDTO, MultipartFile image) {
        try {
            String fileName = System.currentTimeMillis()+image.getOriginalFilename();
            String destFileName="D:\\ideaIU\\work-please\\OnlineEducation\\src\\main\\resources\\static\\images\\imageFile"+File.separator+fileName;
            videoSeriesDTO.setSeriesImage(fileName);
            videoSeriesDTO.setSeriesImageUrl("http://localhost:8080/images/imageFile/" + fileName);
            File destFile = new File(destFileName);
            destFile.getParentFile().mkdirs();
            image.transferTo(destFile);
        } catch (IOException e) {
            logger.info("视频封面上传错误->>>>" + e);
        }
    }

    public static void uploadVideo(VideoUserIdDTO video, MultipartFile uploadVideo) {
        try {
            String fileName = System.currentTimeMillis()+uploadVideo.getOriginalFilename();
            String destFileName="D:\\ideaIU\\work-please\\OnlineEducation\\src\\main\\resources\\static\\video"+File.separator+fileName;
            video.setCoverUrl("http://localhost:8080/video/" + fileName);
            File destFile = new File(destFileName);
            destFile.getParentFile().mkdirs();
            uploadVideo.transferTo(destFile);
        } catch (IOException e) {
            logger.info("视频上传错误->>>>" + e);
        }
    }
}
