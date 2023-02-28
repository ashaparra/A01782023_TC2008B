using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CreateBalls : MonoBehaviour
{
    // Class variable to be chamged form the Unity interface
   [SerializeField] GameObject ball; //SeralizeField: que sea visible desde unity 
   [SerializeField] float delay; 
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("DropBall",0.5f, delay);//Que objeto voy a llamar, espera antes de llamarla, que tanto tiempo voy a llamarla
    }

    void DropBall()
    {
        // Generate a new random position 
        Vector3 pos = new Vector3(Random.Range(-10.0f, 10.0f), 6 ,0);
        // Create a copy of the prefab
       GameObject obj= Instantiate(ball,pos, Quaternion.identity);
       //Doom the object to die in 5 seconds
       Destroy(obj, 5);

    }
}
