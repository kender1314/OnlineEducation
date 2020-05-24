package com.graduate.onlineeducation.utils;

import com.graduate.onlineeducation.exception.ExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigDecimal;
import java.util.Base64;

/**
 * @Author hejiang
 * @Version 1.0.0 RELEASE
 * @Date 2020-01-20 14:50
 * @Description:
 */
public class SaltEncryptUtil {
    private static Logger logger = LoggerFactory.getLogger(SaltEncryptUtil.class);

    /**
     * 在Java中，String的getBytes()方法是得到一个操作系统默认的编码格式的字节数组.
     */
    public static void main(String[] args) {
        String privateKey = encrypt(Base64.getEncoder().encodeToString(args[0].getBytes()));
        System.out.println(privateKey);
        System.out.println(stringToDecode(privateKey));
    }

    private static final int EXCEEDED = 10;

    /**
     * Salt encryption
     *
     * @param str str
     * @return String after encryption
     */
    public static String encrypt(String str) {
        String randomSalt = randomSalt(str.length() + EXCEEDED);
        return str.length() > randomSalt.length() ? encrypting(str, randomSalt) : encrypting(randomSalt, str);
    }

    /**
     * Salt decryption
     *
     * @param str str
     * @return String after decryption
     */
    public static String decrypt(String str) {
        String randomSalt = randomSalt(EXCEEDED + (str.length() - EXCEEDED) / 2);
        return str.length() > 2 * randomSalt.length() ? decrypting(str, randomSalt) : decrypting0(str, randomSalt);
    }

    public static String stringToDecode(String str) {
        String temp = decrypt(str);
        byte[] decode = Base64.getDecoder().decode(temp);
        return new String(decode);
    }

    private static String randomSalt(int length) {
        char[] saltArr = new char[length];
        for (int i = 0; i < saltArr.length; i++) {
            saltArr[i] = (char) getRandom();
        }
        return String.valueOf(saltArr);
    }

    private static int getRandom() {
        double v;
        do {
            v = Math.random() * 122;
        } while (v < 32);
        return BigDecimal.valueOf(v).intValue();
    }

    private static String encrypting(String str, String salt) {
        int strLen = str.length();
        int saltLen = salt.length();
        if (saltLen == 0) {
            return str;
        }
        int sum = saltLen + strLen;
        char[] chars = new char[sum];
        int step = strLen / saltLen + 1;
        for (int i = 1, j = 0; ; i++) {
            if (i % step == 0 && saltLen > j) {
                chars[i - 1] = salt.charAt(j);
                j++;
            } else if (strLen > i - j - 1) {
                chars[i - 1] = str.charAt(i - j - 1);
            } else {
                break;
            }
        }
        return String.valueOf(chars);
    }

    private static String decrypting(String str, String salt) {
        int sum = str.length();
        int saltLen = salt.length();
        int strLen = sum - saltLen;
        char[] chars = new char[strLen];
        int step = strLen / saltLen + 1;
        for (int i = 1, j = 0; i <= sum; i++) {
            if (i % step == 0 && salt.length() > j) {
                i++;
                j++;
            }
            if (i <= sum) {
                chars[i - 1 - j] = str.charAt(i - 1);
            }
        }
        return String.valueOf(chars);
    }

    private static String decrypting0(String str, String salt) {
        int sum = str.length();
        int saltLen = salt.length();
        int strLen = sum - saltLen;
        if (strLen == 0) {
            return "";
        }
        char[] chars = new char[strLen];
        int step = saltLen / strLen + 1;
        for (int i = 1, j = 0; i <= step * strLen; i++) {
            if (i % step == 0 && salt.length() > j) {
                chars[j] = str.charAt(i - 1);
                i++;
                j++;
            }
        }
        return String.valueOf(chars);
    }
}
