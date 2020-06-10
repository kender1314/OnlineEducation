package com.graduate.onlineeducation.autoconfigure.configure;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Markdown图片过滤
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020/6/6 12:52
 * @Description:
 */
@Configuration
public class MyWebSystemConfigurer implements WebMvcConfigurer {

    @Value("${spring.upload.imageUrl}")
    private String imageUrl;

    @Value("${spring.upload.videoUrl}")
    private String videoUrl;

    @Value("${spring.upload.fileMap}")
    private String fileMap;

    /**
     * 添加资源映射配置，方便网络访问资源
     *
     * @param registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(fileMap).addResourceLocations("file:" + imageUrl, "file:" + videoUrl);
        WebMvcConfigurer.super.addResourceHandlers(registry);
    }
}
