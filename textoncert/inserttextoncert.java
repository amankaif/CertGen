// take a long string and a image as input and print the text on the image with proper allignment
import java.awt.*;
import java.awt.image.*;
import java.io.*;
import javax.imageio.*;

class inserttextoncert {
    public static void main(String[] args) {
        // get the input
        BufferedImage img = null;
        try {
            img = ImageIO.read(new File("bg1.jpg"));
            // print image width and Height
            System.out.println("Width: " + img.getWidth() + " Height: " + img.getHeight());
        } catch (IOException e) {
            System.out.println("Error: " + e);
        }
        // take input string  of name
        String Name = "n";
        int strt_pos = 700;
        // get the graphics
        Graphics2D g2d = img.createGraphics();
        // calculate the width and strt_pos of image
        // int img_width = img.getWidth();
        // int img_height = img.getHeight();
        
        // set the font
        g2d.setFont(new Font("TimesRoman", Font.BOLD, 200));
        // set font color as black
        g2d.setColor(Color.BLACK);
        // get the text variables
        String text1 = "This is name of person\n" +
                "                  of\n" +
                "     then the problem";
        // print the above string and center alignment on image
        int textWidth1 = g2d.getFontMetrics().stringWidth(text1);
        g2d.drawString(text1, (img.getWidth()-textWidth1)/2, strt_pos+300);
        // set the font
        g2d.setFont(new Font("TimesRoman", Font.PLAIN, 120));
        // set font color as black
        g2d.setColor(Color.BLACK);
        // get the text variables
//        String text2 = "is hearby granted to";
        // print the above string and center alignment on image
//        int textWidth2 = g2d.getFontMetrics().stringWidth(text2);
//        g2d.drawString(text2, (img.getWidth()-textWidth2)/2, strt_pos+525);
//
//        g2d.setFont(new Font("TimesRoman", Font.BOLD, 200));
//        // set font color as black
//        g2d.setColor(Color.BLACK);
//        // get the text variables
//        String text3 = Name;
//        // print the above string and center allignment on image
//        int textWidth3 = g2d.getFontMetrics().stringWidth(text3);
//        g2d.drawString(text3, (img.getWidth()-textWidth3)/2, strt_pos+800);
//
//        g2d.setFont(new Font("TimesRoman", Font.PLAIN, 120));
//        // set font color as black
//        g2d.setColor(Color.BLACK);
//        // get the text variables
//        String text41 = "For his exemplary performance in TEAM Team";
//        // search for the word in the string and replace it with the given string
//        String text4 = text41.replace("TEAM", "Design");
//
//        // print the above string and center allignment on image
//        int textWidth4 = g2d.getFontMetrics().stringWidth(text4);
//        g2d.drawString(text4, (img.getWidth()-textWidth4)/2, strt_pos+1100);
//
//        g2d.setFont(new Font("TimesRoman", Font.PLAIN, 120));
//        // set font color as black
//        g2d.setColor(Color.BLACK);
//        // get the text variables
//        String text51 = "of the TEAM team";
//        String text5 = text51.replace("TEAM", "COEET");
//        // print the above string and center alignment on image
//        int textWidth5 = g2d.getFontMetrics().stringWidth(text5);
//        g2d.drawString(text5, (img.getWidth()-textWidth5)/2, strt_pos+1250);
//
        // write the image
        try {
            ImageIO.write(img, "jpg", new File("final.jpg"));
        } catch (IOException e) {
            System.out.println("Error: " + e);
        }
    }
}
