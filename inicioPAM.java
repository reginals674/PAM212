
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;


public class inicioPAM extends JFrame {


    JPanel pInfo, pBotones;
    JLabel lblInfo, lblOpciones;
    JTextArea txtInfo;

    JButton btnReglamento, btnLineamiento, btnFechas, btnPorcentaje;

    inicioPAM() {
        
        pBotones = new JPanel();
        pInfo= new JPanel();

        lblInfo = new JLabel("Información:");
        lblOpciones = new JLabel("Opciones:");
        
        btnReglamento = new JButton("Reglamento");
        btnLineamiento = new JButton("Lineamiento");
        btnFechas = new JButton("Fechas Importantes");
        btnPorcentaje = new JButton("Porcentaje de Aprobación");

        txtInfo = new JTextArea();

        txtInfo.setEditable(false);
        txtInfo.setLineWrap(true);
        txtInfo.setWrapStyleWord(true);
        txtInfo.setColumns(30);
        txtInfo.setRows(30);        
        pInfo.add(txtInfo);
        
        
        pBotones.add(lblOpciones);
        btnReglamento.addActionListener(actionListener);
        btnLineamiento.addActionListener(actionListener);
        btnFechas.addActionListener(actionListener);
        btnPorcentaje.addActionListener(actionListener);
        pBotones.add(btnReglamento);
        pBotones.add(btnLineamiento);
        pBotones.add(btnFechas);
        pBotones.add(btnPorcentaje);
        
        add(pBotones, BorderLayout.NORTH);
        add(lblInfo, BorderLayout.CENTER);
        add(pInfo, BorderLayout.SOUTH);

        pack();
        setVisible(true);

    }
    
    ActionListener actionListener = new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
              if (e.getActionCommand() == "Reglamento") {
                Reglamento();
            } 
              else if (e.getActionCommand() == "Lineamiento") {
                Lineamiento();
            }
              else if (e.getActionCommand() == "Fechas Importantes") {
                Fechas();
            }
              else {
               Porcentaje();

            }  
        }
      };
      
      
      private void Reglamento() {
          String reglamento = txtInfo.getText();
          txtInfo.setText( "Reglamento: \n\n"
                + "1. Participar activamnte en clase\n"
                + "2. No usar chat para practicas y tareas\n");  
        
      }   

      private void Lineamiento() {
          String lineamiento = txtInfo.getText();
          txtInfo.setText( "Lineamientos: \n\n"
                + "1. Trabajos se entregan en classroom \n"
                + "2. Entregas en completas.\n"
                + "3. Respetar tiempos de entregas\n"
                + "4. Presentar trabajos de calidad universitaria\n"
                + "5. Todo trabajo debe cumplir con portada estilo libre;logo UPQ, tema, datos de alumno y materia\n"
                + "6. Se deben incluir conclusiones del aprendizaje durante el desarrollo de la actividad.\n");
      }
      private void Fechas() {
          String fechas = txtInfo.getText();
          txtInfo.setText( "Fechas Importantes: \n\n"
                + "1. Exámenes parcial 1: 30 septiembre de 2025\n"
                + "2. Exámenes parcial 2: 4 de noviembre de 2025\n"
                + "3. Exámenes parcial 3: 2 de diciembre de 2025\n");
      } 
      private void Porcentaje() {
          String porcentaje = txtInfo.getText();
          txtInfo.setText( "Porcentaje de Aprobación: \n\n"
                + "1 PARCIAL\n"
            + "EVIDENCIA DE CONOCIMIENTO  40%\n"
            + "EVIDENCIA DE DESEMPEÑO     20%\n"
            + "EVIDENCIA DE PRODUCTO      30%\n"
            + "PROYECTO INTEGRADOR        10%\n\n"
            + "2 PARCIAL\n"
            + "EVIDENCIA DE CONOCIMIENTO  40%\n"
            + "EVIDENCIA DE DESEMPEÑO     20%\n"
            + "EVIDENCIA DE PRODUCTO      20%\n"
            + "PROYECTO INTEGRADOR        20%\n\n"
            + "3 PARCIAL\n"
            + "EVIDENCIA DE CONOCIMIENTO  20%\n"
            + "EVIDENCIA DE DESEMPEÑO     10%\n"
            + "EVIDENCIA DE PRODUCTO      40%\n"
            + "PROYECTO INTEGRADOR        30%");

      } 
    
    public static void main(String[] args) {
        new inicioPAM();
        
    }
}







    
