package com.graduate.onlineeducation.utils;

import com.graduate.onlineeducation.entity.DTO.VideoDTO;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesDTO;
import com.graduate.onlineeducation.entity.DTO.VideoSeriesUserIdDTO;
import com.graduate.onlineeducation.entity.DTO.VideoUserIdDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.UUID;

/**
 * SpringBoot中使用@Value()只能给普通变量注入值，不能直接给静态变量赋值
 *
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/5/23 13:11
 * @Description:
 */

@Component
public class UploadUtils {
    private static Logger logger = LoggerFactory.getLogger(UploadUtils.class);

    private static String imageUrl;

    private static String videoUrl;

    private static String databaseUrl;


    @Value("${spring.upload.imageUrl}")
    public void setImageUrl(String imageUrl) {
        UploadUtils.imageUrl = imageUrl;
    }

    @Value("${spring.upload.videoUrl}")
    public void setVideoUrl(String videoUrl) {
        UploadUtils.videoUrl = videoUrl;
    }

    @Value("${spring.upload.databaseUrl}")
    public void setImageDatabaseUrl(String databaseUrl) {
        UploadUtils.databaseUrl = databaseUrl;
    }


    public static void uploadImage(VideoDTO video, MultipartFile image) {
        try {
            String fileName = System.currentTimeMillis() + image.getOriginalFilename();
            String destFileName = imageUrl + fileName;
            video.setVideoImage(fileName);
            video.setVideoImageUrl(databaseUrl + fileName);
            File destFile = new File(destFileName);
            destFile.getParentFile().mkdirs();
            image.transferTo(destFile);
        } catch (IOException e) {
            logger.info("视频封面上传错误->>>>" + e);
        }
    }

    public static void uploadImage(VideoUserIdDTO video, MultipartFile image) {
        try {
            String fileName = System.currentTimeMillis() + image.getOriginalFilename();
            String destFileName = imageUrl + fileName;
            video.setVideoImage(fileName);
            video.setVideoImageUrl(databaseUrl + fileName);
            File destFile = new File(destFileName);
            destFile.getParentFile().mkdirs();
            image.transferTo(destFile);
        } catch (IOException e) {
            logger.info("视频封面上传错误->>>>" + e);
        }
    }

    public static void uploadImageSeries(VideoSeriesUserIdDTO videoSeriesDTO, MultipartFile image) {
        try {
            String fileName = System.currentTimeMillis() + image.getOriginalFilename();
            String destFileName = imageUrl + fileName;
            videoSeriesDTO.setSeriesImage(fileName);
            videoSeriesDTO.setSeriesImageUrl(databaseUrl + fileName);
            File destFile = new File(destFileName);
            destFile.getParentFile().mkdirs();
            image.transferTo(destFile);
        } catch (IOException e) {
            logger.info("视频系列封面上传错误->>>>" + e);
        }
    }

    public static void uploadVideo(VideoUserIdDTO video, MultipartFile uploadVideo) {
        try {
            String fileName = System.currentTimeMillis() + uploadVideo.getOriginalFilename();
            String destFileName = videoUrl + fileName;
            video.setCoverUrl(databaseUrl + fileName);
            File destFile = new File(destFileName);
            destFile.getParentFile().mkdirs();
            uploadVideo.transferTo(destFile);
        } catch (IOException e) {
            logger.info("视频上传错误->>>>" + e);
        }
    }
}
